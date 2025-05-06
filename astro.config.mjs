// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://elidholm.github.io",
  base: "/coding-bookshelf",
  outDir: "./dist",
  build: {
    assets: "assets",
  },
});
