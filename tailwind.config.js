/** @type {import('tailwind's').Config} */
module.exports = {
  prefix: 'slm-',
  purge: {
    enabled: true,
    content: ['./src/**/*.ts', './src/**/*.tsx']
  },
  theme: {
    extend: {
      colors: {
        gray: {
          base: '#757575',
          p1: '#ABABAB'
        },
        blue: {
          base: '#3C71FF',
          light: '#F1F5FF',
        },
      },
      fontSize: {
        '13px': '13px',
      },
      scale: {
        sm: '0.833'
      },
      width: {
        '188px': '188px',
        '190px': '190px',
        sign_up_width: 'calc(100% - 16px)',
      },
      fontFamily: {
        base: ['interstate']
      }
    }
  },
  plugins: []
}
