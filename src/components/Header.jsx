
const enlaces = [
    {texto: "Inicio", href: "/"},
    {texto: "Recetas", href: "/recetas"},
    {texto: "Sobre Mí", href: "/sobre-mi"},
    {texto: "Contacto", href: "/contacto"}
]


function Header(){
    return (
        <header className="bg-[#DACFBB] border-b-2 border-black sticky top-0 z-50">
        <div className="max-w-6x1 mx-auto px-6 h-16 flex items-center justify-between">


          <a href="/"  className="font-helvetia text-x1 text-[#6A7D4F]">
          Cocinando con Bárbara
          </a>
          

          <nav>
           <ul className="flex gap-2 list-none">
                        {enlaces.map((enlace) => (
                            <li key={enlace.href}>
                                <a
                                    href={enlace.href}
                                    className="text-sm font-medium px-4 py-2 rounded-full border-2 border-black
                                    shadow-[1px_1px_0px_#1C1C1C]
                                    hover:bg-[#6A7D4F] hover:text-white hover:border-[#6A7D4F] 
                                    active:translate-y-0.5 active:shadow-none
                                    transition-all inline-block"
                            >
                                {enlace.texto}
                            </a>
            </li>
                        ))}

          </ul>
        </nav>
    
    </div>
 </header>
    )
}

export default Header