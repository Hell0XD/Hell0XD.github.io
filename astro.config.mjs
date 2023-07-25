import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import mdx from "@astrojs/mdx";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://maxmuller.me",
  integrations: [tailwind(), sitemap(), compress(), mdx(), prefetch()],
  build: {
    inlineStylesheets: 'auto',
    format: "file",
  },
});