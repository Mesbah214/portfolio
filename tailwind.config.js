/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        size: "background-size",
      },
      backgroundSize: {
        default: "0 100%",
        hover: "100% 100%",
      },
      screens: {
        "lg-screen": "1124px",
        "custom-small": "600px",
      },
      backgroundImage: {
        'transitionGradient': 'linear-gradient(90deg, #4ce19e, #4ce19e)'
      },
      fontSize: {
        html: "62.5%",
        fs88: "8.8rem",
        fs72: "7.2rem",
        fs48: "4.8rem",
        fs40: "4rem",
        fs32: "3.2rem",
        fs24: "2.4rem",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        body: "hsl(0, 0%, 8%)",
        contact: "hsl(153, 71%, 59%)",
        accent: "hsl(0, 0%, 14%)",
        primary: "hsl(0, 100%, 100%)",
        secondary: "hsl(0, 0%, 85%)",
        invalid: "#ff6f58",
      },
    },
  },
  plugins: [],
  variants: {
    fill: ["hover", "focus"],
  },
};
