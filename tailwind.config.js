/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romance: {
          50: '#fff5f7',
          100: '#ffe8ee',
          200: '#ffd0dd',
          300: '#ffa8c0',
          400: '#ff709b',
          500: '#f43f7a',
          600: '#e11d62',
          700: '#be124e',
          800: '#9d1245',
          900: '#84133e',
        },
        cream: {
          50: '#ffffff',
          100: '#fdfbf7',
          200: '#faf6ee',
          300: '#f5eee0',
        },
        wine: {
          500: '#8b1e3f',
          600: '#721532',
          700: '#5a0e26',
          800: '#43091b',
          900: '#2c0410',
        },
        gold: {
          300: '#f9e29d',
          400: '#f3ce65',
          500: '#d4af37',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cursive: ['"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(255, 112, 155, 0.4))' },
          '50%': { filter: 'drop-shadow(0 0 25px rgba(255, 112, 155, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}
