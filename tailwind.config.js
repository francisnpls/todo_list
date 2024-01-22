/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        light: "url('./src/assets/light.jpg')",
        dark: "url('./src/assets/dark.jpg')",
      },
      fontFamily: {
        comic: ["Comic Neue", "cursive"],
      }
    },
    screens: {
      xx: "350px",
      xs: "480px",
      ss: "620px",
      sm: "770px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

