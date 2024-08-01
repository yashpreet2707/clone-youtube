/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'racoon-dance': "url('/public/raccoon-dance.gif')" ,
      }
    },
  },
  plugins: [],
}

