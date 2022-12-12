/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      'mint': '#ADEFD1FF',
      'sailorBlue': '#00203F',
      'black': '#000000',
      'white': '#ffffff',
    },
    fontWeight: {
      'light': 100,
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
