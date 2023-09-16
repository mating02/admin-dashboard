/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'container': '1fr 5fr',
        'header' : '2fr 1fr',
        'cards' : 'repeat(auto-fit, minmax(18rem, 1fr))',
        'main' : '3fr 1fr',
        'card': '1fr 25fr'
      },
      gridTemplateRows: {
        '3mm': 'repeat(3, min-content)',
        'header': 'repeat(2, min-content)',
        'container': 'min-content auto',
        'main': 'min-content auto'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      width: {
        'button': 'clamp(0, min-content, auto)'
      }
    },
  },
  plugins: [],
}

