import React from 'react';
import type {Node} from 'react';

import {Provider} from 'react-redux';

import {ThemeProvider} from '@emotion/react';
import Navigation from './src/navigation';
import store from './src/store';
import theme from './src/theme';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
