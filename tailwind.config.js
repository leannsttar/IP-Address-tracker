/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        'patternDesktop' : "url('../images/pattern-bg-desktop.png')",
        'patternMobile' : "url('../images/pattern-bg-mobile.png')"
      },
      fontFamily:{
        Montserrat: ['Montserrat', 'sans-serif'],
        Lato: ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}
