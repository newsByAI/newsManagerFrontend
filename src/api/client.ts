// src/api/client.ts
import axios from 'axios';

// Declaramos la forma de nuestro objeto de configuración global para tener tipado
declare global {
    interface Window {
        appConfig: {
            VITE_API_BASE_URL: string;
        };
    }
}

const getApiBaseUrl = (): string => {
    // Entorno de DESARROLLO (npm run dev)
    if (import.meta.env.DEV) {
        console.log("Running in DEV mode, using .env variable");
        return import.meta.env.VITE_API_BASE_URL;
    }

    // Entorno de PRODUCCIÓN (dentro de Docker)
    console.log("Running in PROD mode, using window.appConfig");
    return window.appConfig?.VITE_API_BASE_URL;
};

const API_BASE_URL = getApiBaseUrl();


if (!API_BASE_URL || API_BASE_URL.includes("placeholder")) {
    console.error("FATAL ERROR: La URL de la API no está configurada. Revisa tu archivo .env (para dev) o la inyección de la variable de entorno en el contenedor (para prod).");
}

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;