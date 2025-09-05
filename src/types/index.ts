// src/types/index.ts

/**
 * Representa un único artículo retornado por la API de búsqueda.
 */
export interface ArticleResult {
    id: number;
    title: string;
    url: string | null;
    published_at: string; // Usamos string, ya que la API lo devuelve en formato ISO
    content_preview: string | null;
    distance: number;
}

/**
 * Representa la estructura completa del objeto de respuesta de la API de búsqueda.
 */
export interface SearchResponse {
    query: string;
    results: ArticleResult[];
}