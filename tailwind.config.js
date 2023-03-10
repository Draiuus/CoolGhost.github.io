const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.slate[100],
          to_bg: colors.slate[200],
        },
        titles: colors.cyan[600],
        links: {
          txt: colors.cyan[900],
          hover_txt: colors.cyan[700],
        },
        loading_spinner: colors.cyan[500],
        popups: {
          bg: colors.indigo[200],
          txt: colors.slate[800],
          internal_border: colors.slate[200],
        },
        warning: {
          txt: colors.purple[400],
          bg: colors.yellow[400],
          border: colors.yellow[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.slate[800],
          bg: colors.indigo[200],
          border: colors.slate[200],
          hover_txt: colors.slate[800],
          hover_bg: colors.slate[100],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: colors.white,
          bg: colors.blue[500],
          border: colors.cyan[500],
          hover_txt: colors.white,
          hover_bg: colors.cyan[600],
          hover_border: colors.cyan[600],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.cyan[600],
        txt_input: {
          txt: colors.cyan[900],
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: colors.cyan[900],
          focus_bg: colors.slate[50],
          focus_border: colors.cyan[300],
          placeholder_txt: colors.cyan[900],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: colors.cyan[100],
        },

        // Mint widget
        token_preview: colors.cyan[100],
      },
    },
  },
  variants: {},
  plugins: [],
};
