/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bm-purple': '#5267DF',
        'bm-red': '#FA5959',
        'bm-blue': '#242A45',
        'bm-grey': '#9194A2',
        'bm-white': '#f7f7f7',
      }
    },
    fontFamily: {
      Poppins: ['Rubik, sans-serif']
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  plugins: [],
}
