import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RoutesNavigator from './src/RoutesNavigator';
import {View, Text} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import store from './src/redux/store';

const theme = {
  ...DefaultTheme,
  // Specify custom property

  // Specify custom property in nested object
  colors: {
    myOwnColor: '#BADA55',
  },
};

class App extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <RoutesNavigator />
        </PaperProvider>
      </StoreProvider>
    );
  }
}

export default App;
