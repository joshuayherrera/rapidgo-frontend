import { logo } from "@/assets";
import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <div className="bg-orange-400 py-10">
            <div className="container mx-auto flex flex-col md:flex-row
            justify-between items-center">
                <Link 
                to="/" 
                className="text-3xl font-bold tracking-tight text-white"
                >
                <img 
                    src={logo} 
                    alt="logo"
                    className="h-12 w-28 sm:h-12 sm:w-40 object-contain filter brightness-0 invert"
                />
                </Link>
                <span className="text-white font-bold tracking-tighter flex gap-4">
                    <span>Privacy Policy</span>
                    <span> Terms of service</span>
                </span>
            </div>
        </div>
    )
}

export default Footer;