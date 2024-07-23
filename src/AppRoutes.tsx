import { Navigate, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Ruta para la página principal */}
            <Route
                path="/"
                element={
                    <Layout showHero>
                        <HomePage />
                    </Layout>
                }
            />

            {/* Ruta para la página de callback de autenticación */}
            <Route
                path="/auth-callback"
                element={
                    <AuthCallbackPage />
                }
            />

            {/* Ruta para la página de perfil de usuario */}
            <Route element={<ProtectedRoute />}>
                <Route
                    path="/user-profile"
                    element={
                        <Layout>
                            <UserProfilePage />
                        </Layout>
                    }
                />
            </Route>

            {/* Ruta comodín para redirigir cualquier ruta no definida a la página principal */}
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    );
}

export default AppRoutes;
