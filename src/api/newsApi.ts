// src/api/newsApi.ts

import apiClient from './client';
import type { SearchResponse } from '../types';

/**
 * Realiza una búsqueda semántica de artículos.
 * @param query El término de búsqueda.
 * @returns Una promesa que se resuelve con el objeto de respuesta de la búsqueda.
 */
const searchNews = async (query: string): Promise<SearchResponse> => {
    const response = await apiClient.get<SearchResponse>('/api/v1/search', {
        params: { q: query },
    });
    return response.data;
};

/**
 * Dispara el proceso de ingesta de artículos para una fuente y tema específicos.
 * @param source La fuente de noticias (ej. 'gnews').
 * @param query El tema a buscar para la ingesta.
 * @returns Una promesa que se resuelve con un mensaje de estado del backend.
 */
const ingestNews = async (source: string, query: string): Promise<string> => {
    const response = await apiClient.get<string>(`/api/v1/articles/${source}`, {
        params: { q: query },
    });
    return response.data;
};

// Exportamos las funciones agrupadas para una fácil importación
export const newsApi = {
    search: searchNews,
    ingest: ingestNews,
};