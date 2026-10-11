import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** Page sections, one Markdown/MDX file each, shown in `order`. */
const sections = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/sections" }),
  schema: z.object({
    title: z.string(),
    order: z.number().int().positive(),
  }),
});

export const collections = { sections };
