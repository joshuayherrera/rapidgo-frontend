import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

// Obtiene la URL base de la API desde las variables de entorno de Vite
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getMyUserRequest = async (): Promise<User> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            }
        });

        if(!response.ok) {
            throw new Error("Failed to fetch user data")
        }

        return response.json();
    };

    const { 
        data: currentUser, 
        isLoading, 
        error
    } = useQuery("fetchCurrentUser", getMyUserRequest);

    if(error) {
        toast.error(error.toString());
    }

    return {
        currentUser,
        isLoading,
    };

}

// Define el tipo para la solicitud de creación de usuario
// Esto ayuda a asegurar que siempre se envíen los datos correctos al crear un usuario
type CreateUserRequest = {
    auth0Id: string;  // ID único de Auth0 para el usuario
    email: string;    // Dirección de correo electrónico del usuario
}

// Hook personalizado para crear un usuario
export const useCreateMyUser = () => {
    // Obtiene la función para conseguir el token de acceso de Auth0
    // Esto se usará para autenticar las solicitudes a la API
    const { getAccessTokenSilently } = useAuth0();

    // Función que realiza la solicitud HTTP para crear un usuario
    // Esta función se pasará a useMutation para manejar la creación del usuario
    const createMyUserRequest = async (user: CreateUserRequest) => {
        // Obtiene el token de acceso de Auth0
        // Esto se hace de forma silenciosa, sin interrumpir al usuario
        const accessToken = await getAccessTokenSilently();

        // Realiza la solicitud POST a la API para crear el usuario
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "POST",
            headers: {
                // Incluye el token de acceso en el encabezado de autorización
                Authorization: `Bearer ${accessToken}`,
                // Especifica que el cuerpo de la solicitud es JSON
                "Content-Type": "application/json",
            },
            // Convierte el objeto de usuario a una cadena JSON
            body: JSON.stringify(user)
        });

        // Si la respuesta no es exitosa (código de estado no 2xx), lanza un error
        if(!response.ok) {
            throw new Error("Failed to create user")
        };
    };

    // Utiliza el hook useMutation de react-query para manejar la mutación
    // useMutation maneja automáticamente el estado de carga, error y éxito de la operación
    const { 
        mutateAsync: createUser, // Función asíncrona para ejecutar la mutación
        isLoading,               // Boolean que indica si la mutación está en progreso
        isError,                 // Boolean que indica si la mutación resultó en un error
        isSuccess                // Boolean que indica si la mutación fue exitosa
    } = useMutation(createMyUserRequest)

    // Retorna un objeto con la función de mutación y los estados
    // Esto permite al componente que usa este hook acceder fácilmente a estos valores
    return {
        createUser,  // Función para crear un usuario
        isLoading,   // Estado de carga
        isError,     // Estado de error
        isSuccess,   // Estado de éxito
    };
};

type UpdateMyUserRequest = {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
};

export const useUpdateMyUser = () => {
    // Esto se usará para autenticar las solicitudes a la API
    const { getAccessTokenSilently } = useAuth0();

    const updateMyUserRequest = async (formData: UpdateMyUserRequest) => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        });

        if(!response.ok) {
            throw new Error("Failed to update user")
        };

        return response.json();
    };

    const { 
        mutateAsync: updateUser, 
        isLoading, 
        isSuccess, 
        error, 
        reset 
    } = useMutation(updateMyUserRequest);

    if(isSuccess) {
        toast.success("User updated successfully");
    }

    if(error) {
        toast.error("Failed to update user");
        reset();
    }

    return {
        updateUser,
        isLoading,
    };
}