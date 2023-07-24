/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#DA4EA2",
          secondary: "#c7127f",
        },
        white: {
          main: "#FFFFFF",
        },
        black: {
          main: "#000000",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        auth: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        secondary: "rgba(0, 0, 0, 0.1) 0px 10px 30px",
      },
    },
  },

  plugins: [],
};
