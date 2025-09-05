// src/components/layout/Layout.tsx
import React from "react";
import { Header } from "./Header";
import { Toaster } from "@/components/ui/sonner";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="container mx-auto p-4 md:p-8">{children}</main>
      {/* El componente Toaster renderizará las notificaciones */}
      <Toaster position="top-right" richColors />
    </div>
  );
};
