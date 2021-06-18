const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
    },
    container: {
      center: true,
    },
    extend: {
      inset: {
        4: '1rem',
        6: '1.5rem',
      },
      width: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        108: '28rem',
      },
      maxWidth: {
        '2xl': '42rem',
        '7xl': '80rem',
        '8xl': '90rem',
        container: '112rem',
      },
      zIndex: {
        heaven: '10000',
      },
      colors: {},
      boxShadow: {
        outline: '0 0 0 3px rgba(164,202,254,.45)',
      },
      stroke: (theme) => ({
        red: theme('colors.red.500'),
        green: theme('colors.green.500'),
        yellow: theme('colors.yellow.500'),
        pink: theme('colors.pink.500'),
      }),
      fill: (theme) => ({
        red: theme('colors.red.500'),
        green: theme('colors.green.500'),
        yellow: theme('colors.yellow.500'),
        pink: theme('colors.pink.500'),
      }),
    },
  },
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true
  },
  variants: {
    animation: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus'],
    display: ['responsive', 'group-hover'],
    opacity: ['responsive', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    // enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'common/**/*.js',
      'nuxt.config.js',
    ],
  },
}
