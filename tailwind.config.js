/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        portfolio: {
          'primary':   { DEFAULT: '#283618', light: '#374a22', dark: '#1a2210' },
          'secondary': { DEFAULT: '#606c38', light: '#7a8948' },
          'accent':    { DEFAULT: '#bc6c25', light: '#d4843a', dark: '#9d5720', muted: '#e4a870' },
          'surface':   { DEFAULT: '#374a22', raised: '#4a5e2c' },
          'sage':      { DEFAULT: '#81b29a', light: '#a0c8b2' },
          'cream':     { DEFAULT: '#fefae0', muted: '#c4c2b7' },
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
