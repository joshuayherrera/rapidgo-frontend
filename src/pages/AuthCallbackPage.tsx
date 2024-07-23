import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
    // Hook para navegar a diferentes rutas
    const navigate = useNavigate();
    
    // Obtenemos el usuario autenticado de Auth0
    const { user } = useAuth0();
    
    // Hook personalizado para crear un usuario en nuestra base de datos
    const { createUser } = useCreateMyUser();

    // useRef se usa para mantener el estado de si el usuario ha sido creado o no
    const hasCreateUser = useRef(false);

    useEffect(() => {
        // Si el usuario tiene un sub (ID de Auth0) y un email, y no se ha creado el usuario todavía
        if(user?.sub && user?.email && !hasCreateUser.current) {
            // Crea un usuario en nuestra base de datos con el ID de Auth0 y el email del usuario
            createUser({ auth0Id: user.sub, email: user.email });
            
            // Marcamos que el usuario ha sido creado para evitar intentos repetidos
            hasCreateUser.current = true;
        }
        
        // Navegamos a la ruta raíz ("/")
        navigate("/");
    }, [createUser, navigate, user]); 
    
    // Mientras se está procesando la autenticación y creación del usuario, mostramos "Loading..."
    return <>Loading...</>;
}

export default AuthCallbackPage;
