/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0f0816",
        secondary: "#aaa6c3",
        tertiary: "#220d23",
        "black-100": "#060408",
        "black-200": "#000",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #220202",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
};