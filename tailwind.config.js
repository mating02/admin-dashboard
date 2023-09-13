/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'container': '1fr 5fr',
        'header' : '2fr 1fr',
        'cards' : 'repeat(auto-fit, minmax(150px, 1fr))',
        'main' : '3fr 1fr'
      },
      gridTemplateRows: {
        '3mm': 'repeat(3, min-content)',
        'header': 'repeat(2, min-content)'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

