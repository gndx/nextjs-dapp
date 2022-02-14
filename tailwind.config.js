const colors = require('tailwindcss/colors');

module.exports = {
	// mode: 'jit',
	purge: ['./src/**/*.{html,js}'],
	theme: {
		colors: {
			...colors,
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
};