/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        abyss: {
          900: '#05010a',
          700: '#12071d',
          500: '#25113a',
          300: '#3b1e55',
          100: '#5b2d7a'
        },
        ectoplasm: '#8ff8ff'
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        body: ['"Inter"', 'sans-serif']
      },
      backgroundImage: {
        grain: "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1600\\' height=\\'900\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noise)\\' opacity=\\'0.12\\'/%3E%3C/svg%3E')"
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        pulseSlow: 'pulseSlow 6s ease-in-out infinite'
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '25%': { transform: 'translate3d(2%, -2%, 0)' },
          '50%': { transform: 'translate3d(-1%, 3%, 0)' },
          '75%': { transform: 'translate3d(-3%, -1%, 0)' }
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 1 }
        }
      }
    }
  },
  plugins: []
};
