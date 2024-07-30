import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

// URL base de la API obtenida de las variables de entorno de Vite
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Hook para obtener los datos del usuario actual
export const useGetMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    // Función para realizar la petición GET del usuario
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

    // Ejecuta la query y maneja los estados
    const { 
        data: currentUser, 
        isLoading, 
        error
    } = useQuery("fetchCurrentUser", getMyUserRequest);

    // Muestra un toast de error si la petición falla
    if(error) {
        toast.error(error.toString());
    }

    return { currentUser, isLoading };
}

// Tipo para la solicitud de creación de usuario
type CreateUserRequest = {
    auth0Id: string;
    email: string;
}

// Hook para crear un nuevo usuario
export const useCreateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    // Función para realizar la petición POST de creación de usuario
    const createMyUserRequest = async (user: CreateUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });

        if(!response.ok) {
            throw new Error("Failed to create user")
        };
    };

    // Configura la mutación y maneja los estados
    const { 
        mutateAsync: createUser,
        isLoading,
        isError,
        isSuccess
    } = useMutation(createMyUserRequest)

    return { createUser, isLoading, isError, isSuccess };
};

// Tipo para la solicitud de actualización de usuario
type UpdateMyUserRequest = {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
};

// Hook para actualizar los datos del usuario
export const useUpdateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    // Función para realizar la petición PUT de actualización de usuario
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

    // Configura la mutación y maneja los estados
    const { 
        mutateAsync: updateUser, 
        isLoading, 
        isSuccess, 
        error, 
        reset 
    } = useMutation(updateMyUserRequest);

    // Muestra toasts de éxito o error según el resultado de la actualización
    if(isSuccess) {
        toast.success("User updated successfully");
    }

    if(error) {
        toast.error("Failed to update user");
        reset();
    }

    return { updateUser, isLoading };
};