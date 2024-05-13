/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.php',
    'templates/**/*.{php,twig}',
    './Components/**/*.{php,twig}'
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px'
    },
    colors: {
      white: '#fff',
      black: '#000',
      grey: '#f9f9f9',
      darkgrey: '#333',
      yellow: '#ffe725',
      beige: '#edecd9',
      acqua: '#51bad9',
      azulgrey: '#e6ecee',
      blue: '#6d99f8',
      darkblue: '#001028',
      green: '#ceff5a',
      current: 'currentColor',
      transparent: 'transparent'
    },
    fontSize: {
      body: ['1.25rem'],
      button: ['1rem'],
      superTitle: ['4.375rem'],
      superSubtitle: ['1.875rem'],
      h1: ['4.875rem'],
      h2: ['2.375rem'],
      h3: ['1.25rem'],
      menu: ['1rem']
    },
    screens: {
      sm: '640px',
      md: '780px',
      lg: '1180px',
      xl: '1680px'
    },
    extend: {
      aspectRatio: {
        '16/6': '16 / 6',
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '2/1': '2 / 1'
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px'
      },
      fontFamily: {
        sans: ['"VioletSans"'],
        serif: ['"Periodico"']
      },
      spacing: {
        xs: '15px',
        sm: '25px',
        md: '30px',
        lg: '50px',
        xl: '65px',
        xxl: '100px'
      }
    }
  },
  plugins: []
}
