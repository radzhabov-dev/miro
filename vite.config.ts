import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  server: {
    port: 5174,
  },
});
