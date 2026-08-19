create extension if not exists "pgcrypto";

-- Categorías
create table categorias (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  slug text not null unique,
  color text,
  created_at timestamptz default now()
);

-- Recetas
create table recetas (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  slug text not null unique,
  descripcion text,
  imagen_principal_url text,
  tiempo_preparacion_min integer,
  porciones_base integer not null default 4,
  dificultad text check (dificultad in ('facil', 'media', 'dificil')),
  video_youtube_url text,
  categoria_id uuid references categorias(id) on delete set null,
  estado text not null default 'borrador' check (estado in ('borrador', 'publicado')),
  created_at timestamptz default now()
);

-- ingredientes: fila por ingrediente en lugar de un bloque de texto
-- esto es lo que hace posible la calculadora de porciones dinámica 
create table ingredientes (
  id uuid primary key default gen_random_uuid(),
  receta_id uuid not null references recetas(id) on delete cascade,
  nombre text not null,        -- ej. 'harina', 'huevos grandes'
  cantidad numeric not null,   -- ej. 250, 2
  unidad text,                 -- ej. 'g', 'ml', 'cucharadas'; null si es unidad entera
  orden integer default 0
);

-- Pasos: fila por paso, con foto opcional en cada uno
create table pasos (
  id uuid primary key default gen_random_uuid(), 
  receta_id uuid not null references recetas(id) on delete cascade,
  orden integer not null,
  descripcion text not null,
  imagen_url text
);

-- Índices para las consultas más frecuentes
create index idx_recetas_categoria on recetas(categoria_id);
create index idx_ingredientes_receta on ingredientes(receta_id);
create index idx_pasos_receta on pasos(receta_id);

-- ============================================================
-- Row Level Security
-- Sin esto, cualquiera con la anon key (que va en el código
-- del frontend, público en GitHub) podría leer Y ESCRIBIR
-- directamente en las tablas.
-- ============================================================

alter table categorias enable row level security;
alter table recetas enable row level security;
alter table ingredientes enable row level security;
alter table pasos enable row level security;



create policy "Categorias: lectura publica" on categorias
  for select using (true);

create policy "Recetas publicadas: lectura publica" on recetas
  for select using (estado = 'publicado');

create policy "Ingredientes de recetas publicadas: lectura publica" on ingredientes
  for select using (
    exists (
      select 1 from recetas
      where recetas.id = ingredientes.receta_id
      and recetas.estado = 'publicado'
    )
  );

create policy "Pasos de recetas publicadas: lectura publica" on pasos
  for select using (
    exists (
      select 1 from recetas
      where recetas.id = pasos.receta_id
      and recetas.estado = 'publicado'
    )
  );

-- Nota: de momento NO hay políticas de insert/update/delete.
-- Eso significa que, aunque la anon key sea pública, nadie puede
-- escribir todavía. Añadiremos políticas de escritura (limitadas
-- a un usuario autenticado) cuando decidamos el panel de gestión.



insert into categorias (nombre, slug, color) values
  ('Desayunos', 'desayunos', '#F5C518'),
  ('Comidas', 'comidas', '#2563EB'),
  ('Postres', 'postres', '#DC2626');

insert into recetas (titulo, slug, descripcion, imagen_principal_url, tiempo_preparacion_min, porciones_base, dificultad, video_youtube_url, estado) values
('CORN RIBS', 'corn-ribs', 'Costillas de Maíz. Si eres fan del maiz, prepárate porque esta receta te va obsesionar; crujientes por fuera, jugosos por dentro y full llenos de sabor', null, '40', '6', 'facil', null , 'publicado');