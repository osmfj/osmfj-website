import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    modalId: z.number(),
    date: z.coerce.date(),
    img: z.string(),
    thumbnail: z.string(),
    alt: z.string().optional().default(''),
    projectDate: z.string().optional(),
    client: z.string().optional(),
    category: z.string(),
  }),
});

export const collections = { portfolio };
