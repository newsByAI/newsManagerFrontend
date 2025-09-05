// src/components/search/SearchResults.tsx
import { useSearchNews } from "@/hooks/useSearchNews";
import { ArticleCard, ArticleCardSkeleton } from "./ArticleCard";
import { AlertCircle, SearchX } from "lucide-react";

interface SearchResultsProps {
  query: string;
}

export const SearchResults = ({ query }: SearchResultsProps) => {
  const { data, isLoading, isError, error } = useSearchNews(query);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <ArticleCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-8 flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h2 className="mt-4 text-xl font-semibold">
          Error al realizar la búsqueda
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      </div>
    );
  }

  if (!data || data.results.length === 0) {
    // Solo muestra "no resultados" si se ha hecho una búsqueda (query no es vacío)
    return query ? (
      <div className="mt-8 flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
        <SearchX className="h-12 w-12 text-muted-foreground" />
        <h2 className="mt-4 text-xl font-semibold">
          No se encontraron resultados
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Intenta con otras palabras clave o ingesta más noticias.
        </p>
      </div>
    ) : null; // No muestra nada si aún no se ha buscado
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {data.results.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};
