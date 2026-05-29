import { defineCollection, z } from 'astro:content';

const organization = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    category: z.string(),
    order: z.number(),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    order: z.number().default(0),
  }),
});

// Future portfolio collection for actual projects
const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.coerce.date(),
    img: z.string(),
    thumbnail: z.string(),
    alt: z.string().optional().default(''),
    category: z.string(),
  }),
});

export const collections = { organization, events, portfolio };
