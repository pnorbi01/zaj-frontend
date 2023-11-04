const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animation: {
          fade: 'fade 0.5s ease-in',
          float: 'float 1s ease-in-out infinite'
        },
        fade: {
          '0%': {
            opacity: 0,
            transform: 'translateY(10px)',
          },
          '80%': {
            opacity: .6
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },

        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          }
        }
      }
    },
  },
  plugins: [nextui()],
}

