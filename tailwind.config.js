/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
    
	],

	theme: {
		extend: {},
    
    screens: {

      'xs': '475px',
      // => @media (min-width: 475px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
	
    

	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};

module.exports = config;
    
