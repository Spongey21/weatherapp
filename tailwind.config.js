/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cool': '#2E335A',
        'capsule': '#48319D'
      },
      boxShadow: {
        'capsule': '5px 4px 10px 0px rgba(0, 0, 0, 1), 1px 1px 0px 0px rgba(255, 255, 255, 0.25) inset',
      },
      backgroundImage: {
        'weatherBackground': "url('/WeatherBackground.svg')",
      }
    },
  },
  plugins: [],
}
