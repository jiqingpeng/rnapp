import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import NavigationService from './NavigationService';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import My from './page/My';
import Home from './page/Home';
import Login from './page/Login/Login';
import Main from './page/Main';
import Center from './page/Center';
const StackNavigator = createStackNavigator (
  {
    My,
    Home,
    Main,
    Login,
    Center,
  },
  {
    initialRouteName: 'Center',
    defaultNavigationOptions: {
      headerStyle: {
        // backgroundColor: '#f4511e',
      },
      headerBackTitle: null,
      // headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      header: null,
    },
  }
);
// const HomeStack = createStackNavigator({Home});
// const MineStack = createStackNavigator({Main});

const AppContainer = createAppContainer (StackNavigator); //顶部导航

export default class Navigation extends Component {
  render () {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator (navigatorRef);
        }}
      />
    );
  }
}
