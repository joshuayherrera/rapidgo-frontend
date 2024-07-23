import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

// Define el tipo para las props del componente
type Props = {
  children: React.ReactNode
}

// Componente que configura y proporciona el contexto de Auth0 para la aplicación
const Auth0ProviderWithNavigate = ({children}: Props) => {
  const navigate = useNavigate();
  // Obtiene las variables de entorno necesarias para la configuración de Auth0
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  // Verifica que todas las variables de entorno necesarias estén definidas
  if(!domain || !clientId || !redirectUri || !audience){
    throw new Error("unable to initialise auth")
  }

  // Función que se ejecuta después de que el usuario se autentique
  const onRedirectCallBack = () => {
    navigate("/auth-callback")
  }

  // Renderiza el Auth0Provider con la configuración necesaria
  return (
    <Auth0Provider 
        domain={domain} 
        clientId={clientId} 
        authorizationParams={{
            redirect_uri: redirectUri,
            audience,
        }}
        onRedirectCallback={onRedirectCallBack}
    > 
        {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate;