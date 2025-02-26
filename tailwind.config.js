/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#81b14f',
        accent: '#8faab3',
        text: '#150801',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
