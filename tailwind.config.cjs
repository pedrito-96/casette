/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{html,js,vue}"],
  // Toggle dark-mode based on class or data-mode=”dark”
  //darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    screens: {
      sm: "340px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {},
  },
  plugins: [],
};
