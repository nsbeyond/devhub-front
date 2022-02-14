module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-lilac': {
          DEFAULT: '#F8F9FD',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#F8F9FD',
          '600': '#CCD4F1',
          '700': '#A1AEE4',
          '800': '#7589D8',
          '900': '#4963CB'
        },
        'site-background': {
          DEFAULT: '#DDE2F5',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FDFDFE',
          '500': '#DDE2F5',
          '600': '#B2BDE8',
          '700': '#8698DC',
          '800': '#5B73CF',
          '900': '#3752BB'
        },
        'medium-purple': {
          DEFAULT: '#8860E9',
          '50': '#FFFFFF',
          '100': '#F3EFFD',
          '200': '#D8CCF8',
          '300': '#BEA8F3',
          '400': '#A384EE',
          '500': '#8860E9',
          '600': '#632FE2',
          '700': '#4A1ABE',
          '800': '#37148D',
          '900': '#240D5C'
        },
      },
    },
  },
  plugins: [],
}
