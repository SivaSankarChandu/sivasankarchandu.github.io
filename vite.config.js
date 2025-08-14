import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // If deploying to GitHub Pages at https://sivasankarchandu.github.io/sivasankarchandu/
  // keep this base. If deploying to the ROOT (https://sivasankarchandu.github.io/), set base: "/"
  base: "/",
});
