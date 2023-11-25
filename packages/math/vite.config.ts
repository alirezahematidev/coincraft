import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      formats: ["es", "cjs"],
      entry: [path.resolve(__dirname, "src/math.ts")],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },

  resolve: {
    dedupe: ["react", "react-dom"],
  },
  cacheDir: path.resolve(process.cwd(), ".cache"),
  clearScreen: true,
  server: {
    host: "localhost",
  },
});
