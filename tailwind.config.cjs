/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,  
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      gray:{
        900: '#09090A',
        800: '#202024',
        400: '#7C7CBA',
        100: '#C4C4CC',         
      },
      
      cyan:{
        500: '#81D8F7',
        300: '#79E4EB',
      }

     
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
