/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wood': {
          100: '#f8f3e6',
          200: '#e8d9b9',
          300: '#d8bf8d',
          400: '#c8a566',
          500: '#b88b3f',
          600: '#a37118',
          700: '#8d5800',
          800: '#704500',
          900: '#543300',
        },
        'charcoal': {
          100: '#eaeaea',
          200: '#c8c8c8',
          300: '#a6a6a6',
          400: '#848484',
          500: '#626262',
          600: '#404040',
          700: '#2c2c2c',
          800: '#181818',
          900: '#040404',
        },
        'cream': '#fbf7f0',  // For subtle backgrounds
        'espresso': '#3a2a1b', // Deep brown for accents
        'amber': {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Playfair Display', 'serif'], // For premium headings
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'warm': '0 8px 28px rgba(138, 91, 43, 0.12)',
        'highlight': '0 0 15px rgba(248, 243, 230, 0.5)',
        'premium': '0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'subtle-zoom': 'subtle-zoom 15s ease-out infinite alternate',
        'bounce-slow': 'bounce-slow 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'subtle-zoom': {
          '0%': {
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(1.05)'
          },
        },
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          }
        }
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
      backgroundImage: {
        'grain': "url('/images/grain-texture.png')",
        'wood-texture': "url('/images/wood-texture.png')",
      },
      borderWidth: {
        '3': '3px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
      letterSpacing: {
        'widest': '0.2em',
      },
      opacity: {
        '85': '0.85',
        '95': '0.95',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      height: {
        '100': '25rem',
        '120': '30rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
      },
    },
  },
  plugins: [],
}