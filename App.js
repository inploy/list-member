/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ThemeProvider} from '@emotion/react';
import Navigation from './src/navigation';
import store from './src/store';
import theme from './src/theme';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <SafeAreaView style={backgroundStyle}> */}
        <Navigation />
      </ThemeProvider>
      {/* </SafeAreaView> */}
    </Provider>
  );
};

export default App;
