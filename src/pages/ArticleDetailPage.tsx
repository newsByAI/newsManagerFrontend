// src/pages/ArticleDetailPage.tsx
import { useLocation, Link } from "react-router-dom";
import type { ArticleResult } from "@/types";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

export const ArticleDetailPage = () => {
  const location = useLocation();
  const article = location.state?.article as ArticleResult;

  // Si el usuario llega a esta URL directamente sin datos, mostramos un mensaje.
  if (!article) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Artículo no encontrado</h2>
        <p className="text-muted-foreground mt-2">
          Parece que has llegado aquí por error.
        </p>
        <Button asChild className="mt-6">
          <Link to="/">Volver al inicio</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button asChild variant="ghost" className="mb-6">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a la búsqueda
        </Link>
      </Button>
      <article className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {formatDate(article.published_at)}
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {article.title}
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            {article.content_preview ||
              "El contenido completo no está disponible en la vista previa."}
          </p>
          {/* Si tuvieras el contenido completo, lo renderizarías aquí */}
        </div>
        <Button asChild size="lg" className="mt-6" disabled={!article.url}>
          <a
            href={article.url || undefined}
            target="_blank"
            rel="noopener noreferrer"
          >
            Leer artículo original
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </article>
    </div>
  );
};
