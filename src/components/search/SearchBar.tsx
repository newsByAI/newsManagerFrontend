// src/components/search/SearchBar.tsx
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearchSubmit: (query: string) => void;
  isLoading: boolean;
}

export const SearchBar = ({ onSearchSubmit, isLoading }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearchSubmit(query.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-2xl mx-auto items-center space-x-2"
    >
      <Input
        type="search"
        placeholder="Busca noticias sobre IA, tecnología, ciencia de datos..."
        className="flex-grow"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={isLoading}
      />
      <Button type="submit" disabled={isLoading}>
        <Search className="h-4 w-4" />
        <span className="sr-only">Buscar</span>
      </Button>
    </form>
  );
};
