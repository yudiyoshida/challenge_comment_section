/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#1B2A38',
        'custom-grayish-blue': '#6E839E',
        'custom-light-gray': '#DFE4ED',
        'custom-light-grayish-blue': '#B4CCDB',
        'custom-moderate-blue': '#4C82A9',
        'custom-pale-red': '#FF6B6B',
        'custom-purple': '#5358b6',
        'custom-soft-red': '#E95656',
        'custom-very-light-gray': '#F2F7FA',
      },
      gridTemplateColumns: {
        'custom-md-3cols': 'auto 2fr 1fr'
      }
    },
  },
  plugins: [],
}