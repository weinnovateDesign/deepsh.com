/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	theme: {
		extend: {
			colors: {
				primary: { DEFAULT: "#ED6051" },
				secondary: { DEFAULT: "#AECEB7" },
				dark: { DEFAULT: "#113536" },
				lgYellow: { DEFAULT: "#F2F0BB" },
				light: { DEFAULT: "#E5E5E5" },
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
