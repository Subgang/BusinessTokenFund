/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace'],
      },
      colors: {
        background: '#F2DED0',
        accent: '#BAB6AA',
        text: '#151617',
        cosmic: {
          purple: '#A78BFA',
          blue: '#60A5FA',
          pink: '#F472B6',
        },
        success: {
          50: '#ECFDF5',
          300: '#6EE7B7',
          500: '#10B981',
          700: '#047857',
        },
        warning: {
          50: '#FFFBEB',
          300: '#FCD34D',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          300: '#FCA5A5',
          500: '#EF4444',
          700: '#B91C1C',
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 50%, #F472B6 100%)',
        'cosmic-gradient-soft': 'linear-gradient(135deg, rgba(167, 139, 250, 0.4) 0%, rgba(96, 165, 250, 0.4) 50%, rgba(244, 114, 182, 0.4) 100%)',
      },
      boxShadow: {
        'neumorphic': '10px 10px 20px #BAB6AA, -10px -10px 20px #ffffff',
        'neumorphic-inset': 'inset 5px 5px 10px #BAB6AA, inset -5px -5px 10px #ffffff',
      },
    },
  },
  plugins: [],
};