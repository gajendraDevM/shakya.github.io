/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],

      },
      colors:{

        'brand':'#FFCC00',
        'accent':'#020A0F',
        'second':'#0a1318'

      }
    },
  },
  plugins: [require("daisyui")],
}