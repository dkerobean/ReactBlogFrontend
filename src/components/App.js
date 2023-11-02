import React from 'react';
import Body from './Body';
import ResponsiveAppBar from '../components/Header/AppBar';
import theme from '../theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Body />
    </ThemeProvider>
  )

}

export default App;