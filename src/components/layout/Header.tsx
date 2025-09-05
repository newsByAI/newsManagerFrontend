// src/components/layout/Header.tsx
import { Newspaper } from "lucide-react";
import { IngestionPanel } from "../search/IngestionPanel";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Newspaper className="h-6 w-6" />
          <Link to={"/"}>
            <h1 className="text-xl font-bold tracking-tight">
              AI News Explorer
            </h1>
          </Link>
        </div>
        <IngestionPanel />
      </div>
    </header>
  );
};
