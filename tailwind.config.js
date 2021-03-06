module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'nunito' : ['nunito', 'sans-serif'],
      'raleway' : ['Raleway', 'sans-serif'],
      'poppins' : ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}