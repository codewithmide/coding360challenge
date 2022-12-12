/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      'mint': '#ADEFD1FF',
      'dark-grey': '#333333',
      'black': '#292929',
      'white': '#ffffff',
    },
    fontWeight: {
      'thin': 100,
      'light': 400,
      'normal': 500,
      'bold': 600,
      'bolder': 700
    },
    screens: {
      sm: '200px',
      md: '768px',
    },
    extend: {
      fontFamily: {
        Clash: ['Clash Display', 'sans-serif'],
        Satoshi: ['Satoshi', 'sans-serif'],
        STIX: ['STIX Two Text', 'sans-serif'],
      },
      fontSize: {
        'smallest': '0.8rem',
        'small': '1rem',
        'semi-normal': '1.2rem',
        'normal': '1.4rem',
        'semi-medium': '1.7rem',
        'medium': '2rem',
        'semiBig': '2.5rem',
        'big': '5rem'
      }
    },
  },
  plugins: [],
}
