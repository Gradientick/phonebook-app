import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/phonebook-app/",
  plugins: [react()],
  server: {
    proxy: "localhost:8080",
  },
});
