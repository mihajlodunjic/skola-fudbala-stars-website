import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = (process.env.SITE_URL || "https://www.skolafudbalastars.rs").replace(/\/+$/, "");

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "always",
  build: {
    assets: "assets",
    inlineStylesheets: "never",
  },
  integrations: [sitemap()],
});
