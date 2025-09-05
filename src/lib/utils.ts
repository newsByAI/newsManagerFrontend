// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formatea una fecha en formato ISO a un formato legible.
 * Ejemplo: "5 de septiembre de 2025"
 * @param dateString La fecha en formato ISO (ej. "2025-09-05T10:00:00Z")
 * @returns La fecha formateada.
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}