import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/FFOnto-Book/" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()], // ✅ FIXED
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
