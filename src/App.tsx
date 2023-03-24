import {ThemeProvider} from '@mui/material/styles';
import React from 'react';
import {Outlet} from 'react-router-dom';
import {dark, light} from '@/theme';
import {Provider} from 'react-redux';
import {store} from '@/redux/store';

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);
  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>
      <Provider store={store}>
        <Outlet context={{isDarkTheme, setIsDarkTheme}} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
