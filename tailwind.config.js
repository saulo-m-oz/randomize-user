/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        neutralToWhite: 'linear-gradient(to bottom, #F9F9F9 0%, #F9F9F9 35%, #FFF 35%, #FFF 100%);'
      }
    }
  },
  plugins: []
}
