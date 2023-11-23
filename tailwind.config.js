/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: { max: "600px" },
      md: { max: "800px" },
      lg: { max: "1200px" },
    },
    extend: {},
  },
  plugins: [],
};
