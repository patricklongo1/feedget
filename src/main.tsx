import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider, createTheme } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';

const theme = createTheme(
  {
    palette: {
      type: 'light',
      primary: {
        main: '#005eb8',
        dark: '#043b6e',
        light: '#d4e5f5',
      },
      secondary: {
        main: '#d3d6da',
        light: '#d3d6da',
      },
      background: {
        default: '#383838',
      },
      text: {
        primary: '#9c9c9c',
        secondary: '#eee',
        disabled: '#999999',
      },
      error: {
        main: '#f12323',
        light: '#f78585',
      },
      divider: '#f4f4f4',
    },
    typography: {
      fontFamily: 'Open Sans, Roboto, sans-serif',
      h1: {
        fontFamily: 'Open Sans, sans-serif',
      },
      button: {
        fontSize: 14,
        fontWeight: 500,
        textTransform: 'none',
      },
    },
  },
  ptBR,
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
