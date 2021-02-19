module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        neg15: '-15px',
        neg70: '-70px',
        neg50: '-50px',
      },
      colors: {
        green2: {
          moderate: 'hsl(176, 50%, 47%)',
          dark: 'hsl(176, 72%, 28%)',
        },
        gray2: 'hsl(0, 0%, 48%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
