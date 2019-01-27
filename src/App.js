import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import QrGenerator from './components/QrGenerator';
import Check from './Check';
import QrScanner from './components/QrScanner';

const RootStack = createStackNavigator(
    {
        Home: Check,
        Generate: QrGenerator,
        Scan: QrScanner
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
