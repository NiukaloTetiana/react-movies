export const theme = Object.freeze({
  light: {
    colors: {
      accent: '#ffc700',
      white: '#fff',
      orangeOpas: '#ffc70096',
      gray: '#9e9e9e',
      background: '#716c64',
      backgNav: '#f8f7f72a',
      text: '#d1f9ff',
    },

    spacing: value => `${value * 4}px`,

    shadows: {
      text: 'rgb(11, 9, 9) 1px 1px 1px;',
      small: '3px 3px 3px #f8f7f719, 3px 3px 5px #f8f7f719',
      regular: 'inset 0 0 7px #100e0e, inset 3px 3px 5px #f8f7f77d',
      medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
      box: '0px 4px 10px 4px #0b85984d',
    },

    transition: {
      delay: '300ms',
      trnz: 'ease',
    },
  },
  dark: {
    colors: {
      accent: '#ff00ff',
      white: '#ba55d3',
      orangeOpas: '#4a00b298',
      gray: '#9e9e9e',
      background: '#c1b4fab4',
      backgNav: '#695acd79',
      text: '#9d86e2',
    },
    spacing: value => `${value * 4}px`,
    shadows: {
      text: 'rgb(11, 9, 9) 1px 1px 1px;',
      small: '3px 3px 3px #f8f7f719, 3px 3px 5px #f8f7f719',
      regular: 'inset 0 0 7px #100e0e, inset 3px 3px 5px #f8f7f77d',
      medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
      box: '0px 4px 10px 4px #0b85984d',
    },

    transition: {
      delay: '300ms',
      trnz: 'ease',
    },
  },
});
