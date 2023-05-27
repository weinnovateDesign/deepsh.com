// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxt/image-edge"],
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
