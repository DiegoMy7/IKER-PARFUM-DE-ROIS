/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#0B0B0B',
          900: '#0B0B0B',
          800: '#111111',
          700: '#1A1A1A',
          600: '#222222',
        },
        gold: {
          DEFAULT: '#C8A96B',
          light: '#E2C898',
          dark: '#A0823A',
          glow: 'rgba(200, 169, 107, 0.3)',
        },
        emerald: {
          DEFAULT: '#0E5E55',
          light: '#1A8C80',
          dark: '#094840',
          glow: 'rgba(14, 94, 85, 0.3)',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200, 169, 107, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(200, 169, 107, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
