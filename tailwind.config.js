module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.svg", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Montserrat", "serif"],
    },

    screens: {
      "3xl": { max: "1919px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },

      "min-3xl": { min: "1919px" },
      "min-2xl": { min: "1535px" },
      'min-xl': { min: "1279px" },
      'min-lg': { min: "1023px" },
      'min-md': { min: "767px" },
      'min-sm': { min: "639px" }
    },
    extend: {
      colors: {
        primary: "#D4392A",
        secondary: "#0F71B3",
        gray: {
          50: "#f7f7f7",
          100: "#efefef",
          200: "#dfdfdf",
          300: "#cbcbcb",
          400: "#a8a8a8",
          500: "#878787",
          600: "#6d6d6d",
          700: "#5f5f5f",
          800: "#4a4a4a",
          900: "#3d3d3d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
