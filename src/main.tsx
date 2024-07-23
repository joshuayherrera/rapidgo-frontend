import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes.tsx'
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'sonner'

// Configuración del cliente de React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false // Evita que se vuelvan a cargar los datos cuando la ventana recupera el foco
    }
  }
})

// Renderización de la aplicación React
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Router para manejar la navegación en la aplicación */}
    <Router>
      {/* Proveedor de React Query para manejar el estado y las peticiones */}
      <QueryClientProvider client={queryClient}>
        {/* Proveedor de Auth0 para manejar la autenticación */}
        <Auth0ProviderWithNavigate>
          {/* Componente principal que contiene todas las rutas de la aplicación */}
          <AppRoutes />
          <Toaster visibleToasts={1} position='top-right' richColors/>
        </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
)