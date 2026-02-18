/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: ["font-cinzel", "font-outfit"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        outfit: ["Outfit", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};


