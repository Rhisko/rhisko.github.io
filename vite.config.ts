import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // For repository project page: https://USERNAME.github.io/devops-portfolio/
  // Change to "/" if your repository is USERNAME.github.io
  base: "/devops-portfolio/"
});
