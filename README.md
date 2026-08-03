# Cocina con Bárbara

> Una web de recetas vegetarianas, diseñada para enseñar, educar y construir comunidad.

## Sobre este proyecto

Bárbara ama la cocina real, honesta y orgánica. Esta web es su espacio para compartir recetas vegetarianas, explicar el proceso paso a paso y conectar con gente que quiere aprender a cocinar bien.

**Este es un proyecto real, para una cliente real, y sirve como portfolio de desarrollo.**

## Stack

| Aspecto | Tecnología |
|---|---|
| Frontend | React 18 + Vite |
| Estilos | Tailwind CSS |
| Base de datos | Supabase (PostgreSQL) |
| Almacenamiento de imágenes | Supabase Storage |
| Hosting frontend | Vercel |
| Formularios | Web3Forms |
| Dominio | Sin decidir todavía |

## Características (MVP)

- Listado de recetas por categorías
- Página de receta individual con foto e ingredientes
- Calculadora de porciones dinámica
- Vídeos embebidos de YouTube
- Filtrado por categoría
- Formulario de contacto
- Panel de gestión de contenido 

## Arquitectura

- **Monolito frontend** — todo vive en un solo repo de React
- **Base de datos normalizada** — tablas separadas para categorías, recetas, ingredientes, pasos
- **Row Level Security en Supabase** — lectura pública de recetas publicadas, sin permisos de escritura por defecto
- **Server-side rendering**: no. Vite genera un sitio estático que se sirve desde Vercel

## Notas para desarrolladores

- Las imágenes se comprimen antes de subirlas (máx. 1200px, WebP, 150-300 KB)
- El `.env.local` nunca se sube a Git (está en `.gitignore`)
- Cada semana cierra con un commit que resuma el trabajo

## Contacto

Bárbara: pestanobarbcontrataciones@gmail.com
Desarrollado por: Juan Andrés Pestano

---

**Estado actual:** Fase 0 — Preparando cimientos
