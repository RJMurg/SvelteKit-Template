import type { Config } from 'tailwindcss';
const legsKit = require('@rjmurg/legskit/tailwind');

export default {
	presets: [
		require('@rjmurg/legskit/tailwind'),
	],

	content: ['./src/**/*.{html,js,svelte,ts}'],

	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui')
	],

	daisyui: {
		themes: ["light", "dark", legsKit],
		darkTheme: "dark",
	  },
} as Config;