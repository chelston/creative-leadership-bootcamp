/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { brandPurple: "#6b21a8", brandPink: "#c026d3" },
      backgroundImage: {
        gradientBrand: "linear-gradient(135deg, #6b21a8 0%, #c026d3 100%)"
      }
    }
  },
  plugins: []
};