/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "checkbox-bg":
          "linear-gradient(157deg, rgba(245,255,255,1) 0%, rgba(167,145,238,1) 30%, rgba(124,54,226,1) 100%);",
      },
      content: {
        check: "url(`/assets/${iconSprite}#icon-check`)",
      },
    },
  },
  plugins: [],
};
