import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Plataform,

} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Login from './screens/Login/Login';
import Splash from './screens/Splash/Splash';
import Home from './screens/Home/Home';  // deberia irse
import LoginForm from './screens/Login/LoginForm';
import DrawerNavigator from './screens/DrawerNavigator';


export default class App extends React.Component {
  render() {
    return (
      //<RootStack />
      <Home/>
    );
  }
}
const RootStack = createStackNavigator({
  /* Splash : {
    screen : Splash
  },
  */ 
  Login : {
    screen : Login
  },
  LoginForm : {
    screen : LoginForm
  },
  Home : {
   screen : Home 
  },
  DrawerNavigator :{
    screen : DrawerNavigator
  }

})
