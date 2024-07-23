import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MovileNavLinks from "./MovileNavLinks";

/*
<Sheet> -> Componente descargado de ui.shadcn.com (Ver documentación)
Es para aparecer el menú en modo responsive
*/
const MovileNav = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0() 
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500 h-8 w-8"/>
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated ? (
                        <span className="flex items-center 
                        font-bold gap-2 text-xl">
                            <CircleUserRound className="text-orange-400 h-12 w-12"/>
                            {user?.email}
                        </span> 
                    ) : (
                        <span className="text-xl font-bold"> Welcome to RapidGo!</span>
                    )}
                    
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated ? (
                        <MovileNavLinks />
                    ) : (
                        <Button 
                            onClick={() => loginWithRedirect()}
                            className="flex-1 font-bold bg-orange-500 text-xl">
                            Log In
                        </Button>
                    )}
                </SheetDescription>
                    
            </SheetContent>
        </Sheet>
    )
}

export default MovileNav;