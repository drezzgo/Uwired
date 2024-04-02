import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#AE3419',
				'secondary': '#fff',
				'dark': '#333333'
			},

			scale: {
				'0.15': '0.15',
				'0.20': '0.20',
				'0.20': '0.20',
			},

			fontFamily:{
				
			}
		},
	},
	plugins: [animations],
}
