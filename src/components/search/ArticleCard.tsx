// src/components/search/ArticleCard.tsx
import { type ArticleResult } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  article: ArticleResult;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg">
      <CardHeader>
        <CardTitle className="line-clamp-2">{article.title}</CardTitle>
        <CardDescription>{formatDate(article.published_at)}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {article.content_preview || "No hay vista previa disponible."}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="secondary" className="w-full">
          {/* El Link navega a la nueva ruta y pasa el objeto 'article' en el estado */}
          <Link to={`/article/${article.id}`} state={{ article: article }}>
            Ver detalle
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

// Componente "Esqueleto" para el estado de carga
export const ArticleCardSkeleton = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>
          <div className="h-5 w-5/6 rounded-md bg-muted" />
          <div className="mt-2 h-5 w-3/4 rounded-md bg-muted" />
        </CardTitle>
        <CardDescription>
          <div className="mt-1 h-4 w-1/3 rounded-md bg-muted" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="h-4 w-full rounded-md bg-muted" />
          <div className="h-4 w-full rounded-md bg-muted" />
          <div className="h-4 w-4/5 rounded-md bg-muted" />
        </div>
      </CardContent>
      <CardFooter>
        <div className="h-10 w-full rounded-md bg-muted" />
      </CardFooter>
    </Card>
  );
};
