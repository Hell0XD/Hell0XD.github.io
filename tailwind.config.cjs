/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "#6600ff",
				"secondary": "#715df2",
			},
			fontSize: {
				sm: "0.75rem",
				md: "1.25rem",
				"md-l": "1.5rem",
				lg: "2rem",
				xl: "2.5rem",
				"2xl": "4rem",
			},
			fontFamily: {
				inter: ['Inter', "sans-serif"]
			},
			cursor: {
				normal: 'url("/cursor.png") 5 5, auto',
				interaction: 'url("/cursor-dark.png") 5 5, auto',
			},
			gridTemplateRows: {
				'7': 'repeat(7, minmax(0, 1fr))',
			}
		},
	},
	plugins: [],
}
