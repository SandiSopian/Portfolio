import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", // Pastikan semua asset dimuat dengan path relatif
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
