import { Link } from "react-router-dom";
import { logo } from "../assets";
import MovileNav from "./MovileNav";
import MainNav from "./MainNav";

/*
<Link> -> Redirige todo su contenido al HomePage
<MovileNav> -> Componente que hace aparecer el menu para responsive
<MainNav> -> Componente que aparece como defecto para desktops
*/

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-400 py-4 sm:py-6 w-full">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link 
          to="/" 
          className="text-3xl font-bold tracking-tight text-orange-400"
        >
          <img 
            src={logo} 
            alt="logo"
            className="h-12 w-28 sm:h-12 sm:w-40 object-contain"
          />
        </Link>
        <div className="md:hidden ">
          <MovileNav/>
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  )
}

export default Header;