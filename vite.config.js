import { defineConfig } from "vite";
import path from "node:path";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro(),
    react(),
    tailwindcss(),
  ],
});
