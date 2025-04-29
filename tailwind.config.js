/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["././src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      transitionTimingFunction: {
        jump: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};
