import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { deepPurple, amber } from '@mui/material/colors';
import type { ThemeConfig } from '../types/theme';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: amber[500],
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'default',
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: deepPurple[300],
    },
    secondary: {
      main: amber[300],
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'default',
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#1c1c1c',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        },
      },
    },
  },
});

export const createCustomTheme = (config: ThemeConfig) => {
  let theme = config.mode === 'dark' ? darkTheme : lightTheme;

  if (config.primaryColor && config.secondaryColor) {
    theme = createTheme(theme, {
      palette: {
        primary: {
          main: config.primaryColor,
        },
        secondary: {
          main: config.secondaryColor,
        },
      },
    });
  }

  return responsiveFontSizes(theme);
};
