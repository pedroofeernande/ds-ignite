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
      'gray-900': '#09090A',
      'gray-800': '#202024',
      'gray-400': '#7C7CBA',
      'gray-100': '#C4C4CC',

      'cyan-500': '#81D8F7',
      'cyan-300': '#79E4EB',

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
