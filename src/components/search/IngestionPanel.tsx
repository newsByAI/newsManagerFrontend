// src/components/search/IngestionPanel.tsx
import React, { useState } from "react";
import { useIngestNews } from "@/hooks/useIngestNews";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NEWS_SOURCES = ["newsapi", "core", "news-ai"];

export const IngestionPanel = () => {
  const [query, setQuery] = useState("artificial intelligence");
  const [source, setSource] = useState(NEWS_SOURCES[0]); // Estado para la fuente seleccionada
  const { mutate: ingest, isPending } = useIngestNews();

  const handleIngest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("El tema para la ingesta no puede estar vacío.");
      return;
    }

    toast.info(`Iniciando ingesta desde "${source}" para: "${query}"...`);

    ingest(
      { source, query }, // Usamos la fuente seleccionada del estado
      {
        onSuccess: (message) => {
          toast.success(message || "Proceso de ingesta finalizado con éxito.");
        },
        onError: (error) => {
          toast.error(error.message || "Ocurrió un error durante la ingesta.");
        },
      }
    );
  };

  return (
    <form onSubmit={handleIngest} className="flex items-center gap-2">
      <Input
        placeholder="Tema a ingestar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-9 w-32 md:w-40"
        disabled={isPending}
      />
      <Select
        onValueChange={setSource}
        defaultValue={source}
        disabled={isPending}
      >
        <SelectTrigger className="w-[120px] h-9">
          <SelectValue placeholder="Fuente" />
        </SelectTrigger>
        <SelectContent>
          {NEWS_SOURCES.map((s) => (
            <SelectItem key={s} value={s}>
              {s}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit" variant="outline" size="sm" disabled={isPending}>
        {isPending ? "Ingestando..." : "Ingestar"}
      </Button>
    </form>
  );
};
