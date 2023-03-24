import {createTheme} from '@mui/material/styles';
import {blue} from '@mui/material/colors';
declare module '@mui/material/styles' {
  interface Palette {
    buttonLogin: Palette['primary'];
  }
  interface PaletteOptions {
    buttonLogin: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    buttonLogin: true;
    disableButton: true;
  }
}

export const light: any = createTheme({
  palette: {
    mode: 'light',
    buttonLogin: {
      main: '#121232',
      dark: '#121232',
      light: '#29A8FF',
      contrastText: '#FFFFFF',
    },
  },
});
export const dark: any = createTheme({
  palette: {
    mode: 'dark',
    buttonLogin: {
      main: '#121232',
      dark: '#121232',
      light: '#29A8FF',
      contrastText: '#FFFFFF',
    },
  },
});
