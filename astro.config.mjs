// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// The site is served from deepsherchan.com (the CNAME on the Pages deployment),
// NOT deepsh.com — that is only the repository name. `site` must match the real
// host or canonical URLs and the sitemap point at a domain that does not resolve.
export default defineConfig({
	site: "https://deepsherchan.com",
	integrations: [sitemap()],
	markdown: {
		shikiConfig: { theme: "github-light", wrap: true },
	},
});
