import type { Config } from 'tailwindcss';

export default {
	presets: [
		require('@rjmurg/legskit/tailwind'),
	],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
	 extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
	 themes: [
	  'light',
	  'dark',
	  'bumblebee',
	  'emerald',
	  'corporate',
	  'retro',
	  'cyberpunk',
	 ]
	}
} as Config;