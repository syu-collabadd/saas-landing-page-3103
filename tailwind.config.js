/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a5bcfc',
          400: '#8196f8',
          500: '#6270f3',
          600: '#4f4ee8',
          700: '#4139cb',
          800: '#3732a4',
          900: '#312f82',
          950: '#1e1c4f',
        },
      },
      animation: {
        'fade-in':       'fadeIn 0.6s ease-out both',
        'fade-in-up':    'fadeInUp 0.6s ease-out both',
        'fade-in-down':  'fadeInDown 0.5s ease-out both',
        'slide-in-left': 'slideInLeft 0.6s ease-out both',
        'float':         'float 6s ease-in-out infinite',
        'pulse-slow':    'pulse 4s ease-in-out infinite',
        'spin-slow':     'spin 12s linear infinite',
        'gradient':      'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-24px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
