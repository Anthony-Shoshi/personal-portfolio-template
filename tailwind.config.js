/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": "'Roboto', 'sans-serif'"
      },
      colors: {
        "primary": "#5E3BEE",
        "heading-color": "#282938",
        "bg-shade": "#F5FCFF",
        "dribble": "#E62872",
        "body": "#1C1E53"
      },
    },
  },
  plugins: [],
}

