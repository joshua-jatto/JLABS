/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./public/pages/**/*.{html,js}",
    "./index.html",
    "./main.js",
  // Adjust according to your project structure,
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradientMove 8s ease infinite', 'fade-in': 'fadeIn 1s ease-in-out',
      },
       fontFamily: {
        code: ['"Fira Code"', 'monospace'],
      },
      keyframes: {
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'motion-gradient': 'linear-gradient(-45deg, white, gray, black, gray, white)',
      },
    },
  },
  plugins: [],
}
