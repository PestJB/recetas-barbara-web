import {FaInstagram, FaYoutube} from "react-icons/fa"
import { Heart } from "lucide-react"



const enlaces = [
    {texto: "Inicio", href: "/"},
    {texto: "Recetas", href: "/recetas"},
    {texto: "Sobre Mí", href: "/sobre-mi"},
    {texto: "Contacto", href: "/contacto"}
]

function Footer() {
    return(
        <footer className="bg-[#1C1C1C] text-white">
        <div className="max-w-6x1 mx-auto px-6 py-12 grid grid-cols-3 gap-8">
        
        {/* Columna 1: marca */}

        <div className="flex felx-col gap-4">
         <span className="font-helvetia text-xl text-[#B1C095]">
            Cocinando Con Bárbara
         </span>
        <p className="text-sm text-white/60 leading-relaxed">
         Recetas que enamoran. Cocina real, ingredientes frescos y mucho sabor
        </p>
        </div>

        {/* Columna 2: páginas */}
        <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B1C095]">
             Páginas
            </h4>
            <ul className="flex flex-col gap-2 list-none">
                {enlaces.map((enlace, index) => (
                    <li key={enlace.href}>
                        <a
                        href={enlace.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                        >
                        {enlace.texto}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
            

        {/* Columna 3: redes sociales */}
        <div className="flex flex-col gap-4"> 
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B1C095]">
             Redes Sociales   
            </h4>
            <div className="flex gap-3">
                <a href="https://instagram.com" 
                className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-[#B1C095] transitions-colors"
               >

                <FaInstagram size={18} />

               </a>

               <a href="https://youtube.com" 
                className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-[#B1C095] transitions-colors"
               >

                <FaYoutube size={18} />

               </a>
            </div>
            <span className="text-sm text-white/40"> @barbaracocina</span>
            
        </div>

        </div>
        {/* Pie de página */}

        <div className="border-t border-white/10 py-4 px-6">
         <p className="text-center text-xs text-white/40 flex items-center justify-center gap-1">
         ©️ 2026 Bárbara Pestano. Hecho con
          <Heart size={12} className="text-[#B1C095] fill-[#B1C095]"/>
          y muchos vegetales.
          </p>
        </div>


        </footer>
    )
}

export default Footer