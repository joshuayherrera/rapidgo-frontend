import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MovileNavLinks = () => {
    const { logout } = useAuth0();
  return(
    <>
        <Link
            to="/user-profile"
            className="flex bg-white items-center font-bold
            hover:text-orange-400 text-xl"
        > 
            User Profile
        </Link>
        <Button
            onClick={() => logout() } 
            className="flex items-center px-3 font-bold hover:bg-gray-500 text-xl h-12"
        >
            Log Out
        </Button>
    </>
  )
}

export default MovileNavLinks;