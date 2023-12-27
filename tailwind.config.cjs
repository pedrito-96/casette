/** @type {import('tailwindcss').Config} */
import screens from "./configs/tailwind/screens";

module.exports = {
  content: ["./components/**/*.{html,js,vue}"],
  // Toggle dark-mode based on class or data-mode=”dark”
  //darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    screens,
    extend: {},
  },
  plugins: [],
};
