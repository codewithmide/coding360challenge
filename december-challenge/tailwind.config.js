/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./public/pages/**/*.html",
  "./public/scripts/**/*.js"],
  theme: {
    colors: {
      'grey': '#616161',
      'light-grey': '#AEAEAE',
      'lighter-grey': '#E2E2E2',
      'dark-grey': '#333333',
      'black': '#292929',
      'dark': '#000000',
      'white': '#ffffff',
      'creators-color': 'rgba(0, 0, 0, 0.57)',
      'blue': 'rgba(51, 65, 193, 1)',
      'light-green': 'rgba(175, 176, 145, 1)',
      'teal': '#006ca2',
      'lightest-grey': 'rgba(245, 244, 244, 0.24)',
      'green': 'rgba(62, 160, 59, 1)',
      'new-dark-grey': 'rgba(153, 158, 165, 1)',
      'new-light-grey': 'rgba(184, 186, 188, 1)'
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
      tb: '768px',
      md: '1024px',
    },
    extend: {
      fontFamily: {
        Clash: ['Clash Display', 'sans-serif'],
        Satoshi: ['Satoshi', 'sans-serif'],
        STIX: ['STIX Two Text', 'sans-serif'],
        Baskervville: ['Baskervville', 'serif'],
        Bellefair: ['Bellefair', 'serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        'smalli': '0.6rem',
        'smallest': '0.8rem',
        'small': '1rem',
        'semi-normal': '1.2rem',
        'normal': '1.4rem',
        'normali': '1.5rem',
        'semi-medium': '1.7rem',
        'medium': '2rem',
        'semiBig': '2.5rem',
        'circa': '3rem',
        'biggie': '3.5rem',
        'bigger': '4.25rem',
        'big': '5rem',
        'heavy': '10.625rem'
      }
    },
  },
  plugins: [],
}
