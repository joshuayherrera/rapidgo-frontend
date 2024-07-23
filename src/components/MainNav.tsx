import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

/*
importamos loginWithRedirect para que redirija a iniciar sesión con auth0
isAutheticated -> es para aparecer el UsernameMenu si esta logeado
*/
const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated 
      ? (
        <UsernameMenu /> 
      ) : (
      <Button 
        variant="ghost" 
        className="font-bold text-2xl hover:text-orange-500 hover:bg-white"
        onClick={async () => await loginWithRedirect()}
      >
        Log In
      </Button>
      )}
    </span>
    
  )
}

export default MainNav;