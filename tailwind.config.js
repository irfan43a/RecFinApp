/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        flame: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        charcoal: {
          800: '#18181b',
          900: '#121215',
          950: '#0a0a0c',
        }
      },
      animation: {
        'flame-pulse': 'flamePulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 1.5s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        flamePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9', filter: 'drop-shadow(0 0 15px rgba(249, 115, 22, 0.6))' },
          '50%': { transform: 'scale(1.05)', opacity: '1', filter: 'drop-shadow(0 0 25px rgba(239, 68, 68, 0.8))' },
        },
        flicker: {
          '0%': { opacity: '0.8', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '1', transform: 'translateY(-2px) scale(1.02)' },
          '100%': { opacity: '0.85', transform: 'translateY(1px) scale(0.98)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
