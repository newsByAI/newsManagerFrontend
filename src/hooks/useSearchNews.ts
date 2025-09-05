// src/hooks/useSearchNews.ts

import { useQuery } from '@tanstack/react-query';
import { newsApi } from '../api/newsApi';

/**
 * Hook personalizado para buscar artículos utilizando TanStack Query.
 * @param searchQuery El término de búsqueda.
 * @returns El estado de la consulta de TanStack Query (data, isLoading, isError, etc.).
 */
export const useSearchNews = (searchQuery: string) => {
    return useQuery({
        // La clave de la consulta: identifica unívocamente esta petición.
        // TanStack Query la usa para cachear los resultados.
        queryKey: ['search', searchQuery],

        // La función que se ejecutará para obtener los datos.
        queryFn: () => newsApi.search(searchQuery),

        // Opcional pero recomendado: La consulta solo se activará
        // si `searchQuery` no está vacío. Evita llamadas innecesarias.
        enabled: !!searchQuery.trim(),

        // Opcional: Mantiene los datos anteriores visibles mientras se carga
        // la nueva información, evitando parpadeos en la UI.
        placeholderData: (previousData) => previousData,

        // Opcional: Cuánto tiempo los datos se consideran "frescos" (en milisegundos).
        // Evita refetching innecesario si el usuario busca lo mismo rápidamente.
        staleTime: 1000 * 60 * 5, // 5 minutos
    });
};