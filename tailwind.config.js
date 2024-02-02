/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Acorn', 'Acorn'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
