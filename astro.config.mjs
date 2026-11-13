// VEON demo base: technical setup only. Visual design comes from design/concept.md of each client.
import { defineConfig } from "astro/config";

export default defineConfig({
  devToolbar: { enabled: false },
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
});
