/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['/*.html'],
  darkMode: false, // or 'media' or 'class'
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}', // Include your source files
  ],
  
  theme: {
    extend: {},
  },
  variants: {

    extend: {},
  },
  plugins: [],
}

