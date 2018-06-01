import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import { 
    createBottomTabNavigator,
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
                    <Ionicons name='md-menu' size={24} onPress={()=> navigation.openDrawer() }/>
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

const HomeScreenTabNavigator = createBottomTabNavigator ({
    Profile : {
        screen: Profile,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Profile') {
                  iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
              },

        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
      },
    },
    Camera : {
        screen: Camera,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Camera') {
                  iconName = `ios-camera${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
              },

        })
    }
});