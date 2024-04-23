/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppin: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-gray": "#121212",
      },
    },
  },
  plugins: [require("daisyui")],
};
