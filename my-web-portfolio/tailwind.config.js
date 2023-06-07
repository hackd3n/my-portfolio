/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {    extend: {
    colors: {
      customGreen: 'rgb(43, 182, 115)',
    },
  },
},
variants: {
  extend: {
    textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  },
},
  plugins: [],
}