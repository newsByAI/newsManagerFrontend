// src/hooks/useIngestNews.ts

import { useMutation } from '@tanstack/react-query';
import { newsApi } from '../api/newsApi';

// Definimos el tipo de los argumentos que nuestra función de mutación recibirá.
interface IngestParams {
    source: string;
    query: string;
}

/**
 * Hook personalizado para disparar la ingesta de noticias.
 * Provee una función `mutate` y los estados de la mutación.
 */
export const useIngestNews = () => {
    return useMutation<string, Error, IngestParams>({
        // La función que se ejecutará cuando llamemos a `mutate`.
        // Recibe las variables que le pasemos.
        mutationFn: ({ source, query }) => newsApi.ingest(source, query),

        // Aquí podríamos añadir lógica `onSuccess`, `onError`, `onSettled`
        // para, por ejemplo, mostrar notificaciones (toasts) de forma automática
        // o invalidar otras queries. Lo veremos más adelante.
    });
};