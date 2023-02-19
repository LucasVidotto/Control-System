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
      inset: {
        '3/5': '60%',
        '61/100' : '61%',
        '59/100' : '59%',
        '22/100' : '22%',
        '1/5' : '20%',
        '9/10': '90%',
      }
    },
  },
  plugins: [],
}