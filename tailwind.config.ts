import type { Config } from 'tailwindcss';

export default {
	presets: [require('@rjmurg/legskit/tailwind')],

	content: ['./src/**/*.{html,js,svelte,ts}'],

	plugins: [require('@tailwindcss/typography'), require('daisyui')],

	theme: {
		fontFamily: {
			'sans': ['Montserrat', 'Roboto', 'sans-serif'],
			'mono': ['IBM Plex Mono', 'monospace'],
			'philosopher': ['Philosopher', 'sans-serif'],
		},
	},

	daisyui: {
		themes: ['dark'],
		darkTheme: 'dark'
	}
} as Config;
