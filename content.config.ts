import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// Content v3 requires collections to be declared explicitly. Without this file
// every file under content/ is loaded into a default collection, which works but
// gives no type safety and no way to query by frontmatter field.
export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        // Mirrors the frontmatter already present in content/blog/*.md.
        // publishedDate is free text ("Sep 11, 2021"), not a date — typing it as
        // z.date() would fail validation on every existing post.
        slug: z.string(),
        publishedDate: z.string(),
        abstract: z.string(),
      }),
    }),
  },
})
