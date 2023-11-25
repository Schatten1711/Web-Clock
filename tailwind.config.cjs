/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html","./src/**/*.{jsx,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
            'sans': ['Roboto'],
        },
        fontSize: {
          '6xl': '6rem',
          '7xl': '8rem',
          '8xl': '10rem',
          '9xl': '11rem',
          '10xl': '12rem',
        }
      },
    },
    plugins: [],
  }