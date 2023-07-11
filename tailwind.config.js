/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        violet: '#7541c8',
        grayishBlue: '#48556a',
        blackishBlue: '#19212e',
        lightGray: '#cfcfcf',
        grayishBlue: '#ecf2f8'
      },
      fontFamily: {
        'Borlow Semi Condensed': ['Barlow Semi Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}

