// src/pages/HomePage.tsx
import { SearchBar } from "@/components/search/SearchBar";
import { SearchResults } from "@/components/search/SearchResults";
import { useState } from "react";

export const HomePage = () => {
  // El estado que conecta la barra de búsqueda con los resultados
  const [searchQuery, setSearchQuery] = useState("");

  // Para saber si una búsqueda está en curso y deshabilitar el input
  //   const [isSearching, setIsSearching] = useState(false);

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    // Podemos usar un estado `isSearching` si queremos, aunque el hook ya lo maneja
  };

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Encuentra Noticias con IA
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          Utiliza la búsqueda semántica para explorar artículos de noticias
          previamente procesados por nuestra API.
        </p>
      </section>

      <SearchBar onSearchSubmit={handleSearchSubmit} isLoading={false} />
      <SearchResults query={searchQuery} />
    </div>
  );
};
