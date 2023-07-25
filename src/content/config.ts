import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        name: z.string(),
        desc: z.string(),
        tags: z.array(z.string()),
        "primary-color": z.string(),
        "primary-text": z.string(),
        "background": z.string(),
        image: z.string(),
        "image-small": z.string(),
        position: z.number().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'projects': projectsCollection,
};