/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'death': [
          './src/assets/font/DEATHNOTEFont.ttf'
        ],
      },
      backgroundImage: {
        'bg1' : "url('./src/assets/img/bg1.jpg')",
        'bg2' : "url('./src/assets/img/bg2.jpg')",
        'bg3' : "url('./src/assets/img/bg3.jpg')",
      }
    },
  },
  plugins: [],
}