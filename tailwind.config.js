/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "h4-gray": "#716E6F",
        "header-gray": "#202020",
        "website-bg": "#4F4E4E",
      },
    },
    fontSize: {
      sm: "15px",
      base: "12px",
      m: "45px",
      xl: "19px",
      "4xl": "50px",
      "5xl": "60px",
    },
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["'PT Serif'", "serif"],
  },
  plugins: [],
};
