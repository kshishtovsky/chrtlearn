module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      "open-sans": "Open Sans",
      "rubik": "Rubik"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
