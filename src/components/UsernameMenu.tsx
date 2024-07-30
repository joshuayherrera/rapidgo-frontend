import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

/*
importamos el usuario para obtener su email y el logout para salir
DropdownMenu -> Componente de shadcn que permite abrir una ventana de funcionalidades
user?.email -> obtiene el email del usuario registrado
*/

const UsernameMenu = () => {
    const { user, logout } = useAuth0();
    return (
    <DropdownMenu>
        <DropdownMenuTrigger 
            className="flex items-center px-3 font-bold
            hover:text-orange-400 gap-2 text-xl"
        >
            <CircleUserRound className="text-orange-400 h-12 w-12"/> 
            {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Link
                    to="/manage-restaurant"
                    className="font-bold hover:text-orange-400"
                >
                    Manage Restaurant
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link
                    to="/user-profile"
                    className="font-bold hover:text-orange-400"
                >
                    User Profile
                </Link>
            </DropdownMenuItem>
            <Separator /> 
            <DropdownMenuItem>
                <Button
                    onClick={() => logout()} 
                    className="flex flex-1 font-bold bg-orange-400"
                >
                    Log Out
                </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu;