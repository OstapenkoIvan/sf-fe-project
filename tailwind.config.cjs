/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero_desktop: "url('/src/assets/bg-desktop-light.jpg')",
        hero_mobile: "url('/src/assets/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [],
};
