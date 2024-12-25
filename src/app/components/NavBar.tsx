const NavBar = () => {
    return(
        <div className="flex aling-center justify-between bg-[#F0B2A9] p-4">
            <ul className="flex flex-row gap-20 items-center justify-center w-full text-white">
                
                <a href="" className="hover:scale-110 transition-transform duration-300"><li>Formação</li></a>
                
                <a href="" className="hover:scale-110 transition-transform duration-300"><li>Principais Serviços</li></a>
                
                <a href="" className="hover:scale-110 transition-transform duration-300"><li>Quem sou</li></a>

            </ul>
        </div>
    )
}
export default NavBar;