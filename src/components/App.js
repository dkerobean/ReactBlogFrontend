import React from 'react';
import Welcome from './Home/Welcome';
import ResponsiveAppBar from '../components/Header/AppBar';
import theme from '../theme';
import { ThemeProvider } from 'styled-components';
import BlogList from './Home/BlogList';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Welcome />
      <BlogList />
    </ThemeProvider>
  )

}

export default App;