/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
			'sm': "320px",
			'md': "375px",
			'lg': "425px",
			'xl': "768px",
			'2xl': "1024px",
			'3xl': "1440px",
			'4xl': "1380px",
			'5xl': "2560px"
		},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '1.5rem',
        '3xl': '88px'
      },
    },
    extend: {
      fontFamily: {
        'basier-circle': ['Basier Circle, Sans-serif'],
        'basier-square': ['Basier Square, Sans-serif']
      },
      colors: {
        'primary': {
          100: '#1071ff',
          200: '#629cff',
          300: '#2580ff',
          400: '#0e5dc1',
          500: '#004796'
        },
        'secondary': {
          100: '#ffad5f',
          200: '#ff924a',
          300: '#ff7e27',
          400: '#ff4e00'
        },
        'dark': {
          100: '#737b7d',
          200: '#434447',
          300: '#0c0c0c'
        },
        'light': {
          100: '#e6effb',
          200: '#ffffff',
          300: '#f6f8fb',
          400: '#eaecee',
          500: '#cfd2d5'
        },
        'purple': '#7b61ff',
        'savannah': '#fdc100',
        'extremely-red': '#f52f2f',
        'bright-green': '#00893a'
      },
    },
  },
  plugins: [],
}