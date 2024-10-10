/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx,php,html}',
		'./templates/**/*.php',
		'./components/**/*.{js,jsx,ts,tsx,php}',
		'./blocks/**/*.{js,jsx,ts,tsx,php}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', 'sans-serif'],
			},
			colors: {
				// You can add custom colors here
			},
		},
	},
	plugins: [
		// Add any Tailwind plugins you want to use here
	],
	safelist: [
		'bg-blue-500',
		'hover:bg-blue-700',
		'text-white',
		'font-bold',
		'py-2',
		'px-4',
		'rounded',
		'filter-none',
		'filter-grayscale',
	],
};
