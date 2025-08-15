import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration
export default defineConfig({
  plugins: [react()],
  // Set the base path so that assets resolve correctly when served via GitHub Pages.
  base: "/creative-leadership-bootcamp/"
});