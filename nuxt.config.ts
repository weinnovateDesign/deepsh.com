// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// @nuxthq/studio removed — the CMS was unused and its build step was the only
	// thing tying the deploy workflow to api.nuxt.studio.
	modules: ["@nuxt/content", "@nuxt/image"],
	css: ["~/assets/css/main.css"],
	// Blog routes are dynamic, so the crawler can't find them from the home page.
	// List them explicitly or each post ships as a client-rendered 200.html (bad for SEO).
	nitro: {
		prerender: {
			routes: ["/blog"],
			crawlLinks: true,
		},
	},
	postcss: {
		plugins: {
			"postcss-import": {},
			"tailwindcss/nesting": {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});