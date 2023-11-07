/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rich-gold": "#FFD700",
        "charcoal-black": "#333333",
        "antique-gold": "#c49b63",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
