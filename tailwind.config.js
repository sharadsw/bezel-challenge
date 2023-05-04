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
        500: "#1e3e36",
        600: "#1a3a32",
        700: "#16312b"
      },
      "teal": "#24806b",
      "gray-green": "#778882",
      'gray-dark': {
        DEFAULT: '#273444',
        200: "#dedcd9"
      },
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      "white": "#ffffff",
      "black": "#000000",
      "beige": {
        DEFAULT: "#fffcf9",
        200: "#f6f4f1"
      }
    },
    extend: {
      spacing: {
        "108": "30rem",
        '128': '32rem',
        '144': '36rem',
      },
      width: {
        "98p": "98%"
      }
    },
  },
  plugins: [],
}

