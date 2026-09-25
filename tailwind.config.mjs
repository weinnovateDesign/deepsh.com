import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
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
	plugins: [typography],
};
