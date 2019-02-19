import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import QrGenerator from './components/QrGenerator';
import Check from './Check';
import QrScanner from './components/QrScanner';
import Cart from './components/Cart';

const RootStack = createStackNavigator(
  {
    Home: Check,
    Generate: QrGenerator,
    Scan: QrScanner,
    Cart: Cart
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
