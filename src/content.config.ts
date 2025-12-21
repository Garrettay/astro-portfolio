import { defineCollection, z } from "astro:content";

const devlog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  devlog,
};