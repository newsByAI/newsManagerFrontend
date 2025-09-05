// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css"; // Asegúrate de que tus estilos globales están aquí
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
