/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#141210',
          secondary: '#1c1917',
        },
        surface: '#2a2420',
        card: '#332d27',
        primary: {
          DEFAULT: '#c9a87c',
          light: '#d4b896',
          dark: '#a88a5e',
        },
        accent: '#e8c99b',
        muted: '#a89a8c',
        border: '#4a403a',
        warm: {
          white: '#f5f0eb',
          gray: '#d4cdc6',
        },
      },
      fontFamily: {
        thai: ['"Noto Sans Thai"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(201, 168, 124, 0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(201, 168, 124, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
