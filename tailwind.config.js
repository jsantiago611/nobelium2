const BLOG = require('./blog.config')
const { fontFamily } = require('tailwindcss/defaultTheme')
const CJK = require('./lib/cjk')
const fontSansCJK = !CJK()
  ? []
  : [`"Noto Sans CJK ${CJK()}"`, `"Noto Sans ${CJK()}"`]
const fontSerifCJK = !CJK()
  ? []
  : [`"Noto Serif CJK ${CJK()}"`, `"Noto Serif ${CJK()}"`]

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: BLOG.appearance === 'auto' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    letterSpacing: {
      tight: '-.035em'
    },
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.lightBackground || '#fff'
        },
        night: {
          DEFAULT: BLOG.darkBackground || '#000000'
        }
      },
      fontFamily: {
        sans: ['"NB_Academie"', ...fontFamily.sans, ...fontSansCJK],
        serif: ['"Koor"', ...fontFamily.serif, ...fontSerifCJK],
        mono: ['"NB_Academie"', ...fontFamily.sans, ...fontSansCJK],
        display: ['"Bradford"', ...fontFamily.sans, ...fontSansCJK],
        noEmoji: [
          '"IBM Plex Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
