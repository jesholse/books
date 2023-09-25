import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string().default("Jeshol"),
    publishDate: z.date().default(new Date()),
  }),
});

export const collections = {
  blog: blog,
};
