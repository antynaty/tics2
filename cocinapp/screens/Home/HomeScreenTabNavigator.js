import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import { 
    createTabNavigator,
    createDrawerNavigator
} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';


import Home from './Home';
import Profile from './TabNavigator/Profile';
import Camera from './TabNavigator/Camera';

export default class AppTabNavigator extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerLeft:(
                <View style= {{padding:10 }} >
                    <Ionicons name='md-menu' size={24} onPress={()=> navigation.navigate
                    ('DrawerOpen') }/>
                </View> 
            )
        }
    }
    render() {
      return (
          <HomeScreenTabNavigator/> 
      );
    }
  }

const HomeScreenTabNavigator = createTabNavigator ({
    Profile : {
        screen: Profile,
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon:()=> {
                <Ionicons name = "md-compass" size = {24} /> 
            }
        }
    },
    Camera : {
        screen: Camera,
        navigationOptions:{
            tabBarLabel:'Camera',
            tabBarIcon:()=> {
                <Ionicons name = "md-compass" size = {24} /> 
            }
        }
    }
});