/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Nunito Sans', 'sans-serif'],
        mono: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#4F2D7F',
          teal: '#2E8896',
          orange: '#E8812F',
        },
        ink: {
          50: '#f6f3fa', 100: '#ebe5f3', 200: '#d6cce6', 300: '#b5a6cf',
          400: '#8f7db0', 500: '#6e5a93', 600: '#55447a', 700: '#3f3160',
          800: '#2d2247', 900: '#231a3a', 950: '#1a1030',
        },
        gold: { 400: '#f19a4d', 500: '#d9701e', 600: '#b95d14' },
        cream: '#fbf9ff',
        charcoal: '#1a1030',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}
