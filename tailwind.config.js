/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
  './*.html',           // Your HTML files in the root directory
  './src/**/*.html',    // Any HTML files in the src directory
  './src/**/*.js',      // Any JavaScript files in the src directory
  './src/**/*.jsx',     // Any JSX files in the src directory
  './src/**/*.ts',      // Any TypeScript files in the src directory
  './src/**/*.tsx',     // Any TSX files in the src directory
  // Add other file types or directories as needed
  ],
  theme: {
    extend: {},
  },
  variants: {

    extend: {},
  },
  plugins: [],
}

