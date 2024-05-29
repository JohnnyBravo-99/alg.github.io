/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['/*.html'],
  content: [
    '.alg.github.io/public/**/*.html',
    '.alg.github.io/src/**/*.{css,js,jsx,ts,tsx}', // Include your source files
  ],
  
  theme: {
    extend: {},
  },
  variants: {

    extend: {},
  },
  plugins: [],
}

