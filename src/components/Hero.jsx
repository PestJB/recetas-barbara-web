import { FaLeaf } from 'react-icons/fa';
import { Utensils} from 'lucide-react';

function Hero(){
    return(
        <section className="bg-[#B1C095] px-6 py-20">
            <div className="max-w-6x1 mx-auto grid grid-cols-2 gap-12 items-center">
          
          {/*Columna izquierda: texto*/}
          <div className="flex flex-col gap-6">

            {/* Badge */}

            <span className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-4 py-2 rounded-full border-2 border-black shadow-[3px_3px_0px_#1C1C1C] w-fit">
                <FaLeaf className="text-[#6A7D4F]" />
                Nuevas recetas cada semana
            </span>

            {/* Titulo */}
            <h1 className="font-helvetia text-6xl text-[#1C1C1C] leading-tight">
                Hola, soy{' '}
                <span className="text-[#6A7D4F]">Bárbara.</span>
            </h1>

            {/* Descripción */}
            <p className="text-[#746C64] text-lg leading-relaxed max-w-md">
                Bienvenidos a mi cocina. Aquí reinvento tus platos favoritos con los mismos sabores de siempre, pero con un giro que no esperabasa.
            </p>

            {/* Botones */}
            <div className="flex gap-3">
                <a
                href="/recetas"
                className="inline-flex items-center gap-2 bg-[@6A7D4F] text-white font-semibold px-6 py-3 rounded-full border-2 border-black shadow-[3px_3px_0px_@1C1C1C] hover:bg-[#1C1C1C] active:translate-y-0.5 active:shadow-none transition-all"
                >
                    <Utensils size={16} />
                    Ver Recetas
                </a>

                <a
                href="/sobre-mi"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full border-2 border-black shadow-[3px_3px_0px_#1C1C1C] hover:bg-[#DACFBB] active:translate-y-0.5 active:shadow-none transition-all"
                >
                    Sobre Mí
                    </a>
            </div>
            
            {/* Stats */}

            <div className=" flex items-center gap-0 pt-6 border-t border-black/20">
             <div className='flex flex-col pr-6'>
              <span className="font-helvetia text-3x1 font-bold text-[#6A8D4F]">30+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#746C64]">Recetas</span>
            </div>
            <div className="flex flex-col px-6 border-1-2 border-black">
                <span className="font-helvetia text-3x1 font-bold text-[#6A8D4F]">4k</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#746C64]">Seguidores</span>
            </div>
            <div className="flex flex-col px-6 border-1-2 border-black">
                <span className="font-helvetia text-3x1 font-bold text-[#6A8D4F]">2</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#746C64]">Años</span>
            </div>

            </div>
          </div>
          
          {/* Columna derecha: imagen */}

          <div className="relative">
            <div className="w-full rounded-[32px] border-2 border-black shadow-[12px_12px_12px_#1C1C1C] overflow-hidden aspect-[4/3] bg-[#DACFBB] flex items-center justify-center">
            {/* Aquí irá la foto real de Barbie */}
             <span className="text-[120px]">🥗</span>
            </div>


            {/* Badge sobre la imagen */}
            <span className="absolute -bottom-4 left-6 bg-white text-black text-sm font-semibold px-4 py-2 rounded-full border-2 border-black shadow-[3px_3px_0px_#1C1C1C">
                🌱 Cocina con Amor
            </span>
          </div>
          
          </div>

        </section>
    )
}

export default Hero