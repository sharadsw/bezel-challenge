/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "green": {
        300: "#334e47",
        400: "#3f5a53",
        500: "#1e3e36"
      },
      "teal": "#24806b",
      "gray-green": "#778882",
      'gray-dark': {
        DEFAULT: '#273444',
      },
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      "white": "#ffffff",
      "black": "#000000",
      "beige": "#fffcf9"
    },
    extend: {},
  },
  plugins: [],
}

