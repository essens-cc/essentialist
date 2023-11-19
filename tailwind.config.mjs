/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"d/bg": '#111111',
				"d/primary": '#eeeeee',
				"d/secondary": '#999999',
				"d/tertiary": '#555555',
				"l/bg": "#eeeeee",
				"l/primary": "#111111",
				"l/secondary": "#555555", 
				"l/tertiary": "#999999"
		}
		},
	},
	plugins: [],
}
