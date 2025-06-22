/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      background: '#0e0e0e', //Deep Black for background
      surface: '#1a1a1a', //Dark Grey for Containers/Cards
      accent: '#ff6b00', // warm orange glow for contrast and buttons
      grayMuted: '#2b2b2b', //Muted UI for Elements
      textPrimary: '#f5f5f5' // Light Text for readability
    },
      fontFamily: {
        sans: ['Inter','sans-serif'],
      }
    },
  },
  plugins: [],
};
