/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./index.html",
    "/pages/*.{html,js}",
    "!./node_modules" // Adjust according to your project structure,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
