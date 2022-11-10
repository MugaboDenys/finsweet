/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkish' : '#1D2130',
        'darkishHover' : '#313852',
        'paleBlue' : '#6B7CFF',
        'lightViolet' : '#E0E4FC',
        'LabelGradient' : 'linear-gradient(53.94deg, #373FFF 15.02%, #3ACAF8 82.83%)',
        'blurGradient' : 'radial-gradient(483.9% 2719.65% at -49.5% -250%, #D798E1 17.55%, #9BFFA5 27.56%, #AED3FF 49.89%, #C9D4EF 56.53%, #CACFFA 65.69%)'

      },
      backgroundImage : {
        'hero-pattern': "url('/src/BlurGradient.png')",
      },
      fontFamily : {
        'roboto' : ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}