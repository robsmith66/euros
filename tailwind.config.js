/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'fredoka': ['Fredoka One', 'sans-serif'], // Adding Fredoka One as a custom font family
    }},
  },
  plugins: [],
}

