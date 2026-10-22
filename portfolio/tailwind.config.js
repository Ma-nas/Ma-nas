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
        obsidian: {
          950: '#05070a',
          900: '#090d14',
          800: '#0f172a',
        },
        cyan: {
          glow: '#00f0ff',
        },
        violet: {
          glow: '#6366f1',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px',
        heavy: '24px',
      },
      boxShadow: {
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'specular': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'cyan-glow': '0 0 25px -5px rgba(0, 240, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
