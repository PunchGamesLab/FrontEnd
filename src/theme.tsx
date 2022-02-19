import { createTheme } from '@mui/material'
import KartooniTtf from './Kartooni.ttf'

const theme = createTheme({
  palette: {
    background: {
      paper: '#F2F6FE',
    },
    text: {
      primary: '#0E1D38',
      secondary: '#2772FA',
    },
  },
  typography: {
    fontFamily: 'Kartooni',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Kartooni';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Kartooni'), url(${KartooniTtf}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
})

export default theme
