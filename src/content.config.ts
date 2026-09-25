import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// publishedDate is free text in the existing posts ("Sep 11, 2021"), so it is
// typed as a string. z.coerce.date() would parse it, but rewriting the
// frontmatter is a content change and does not belong in a framework migration.
const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		slug: z.string(),
		publishedDate: z.string(),
		abstract: z.string(),
	}),
});

export const collections = { blog };
