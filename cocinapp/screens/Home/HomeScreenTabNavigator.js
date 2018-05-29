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

// import Ionicons from 'react-native-ve';
import Home from './Home';
import Profile from './Profile';

const HomeScreenTabNavigator = createTabNavigator ({
    Profile : {
        screen: Profile,
        navigationOptions:{
            tabBarLabel:'Feed'
            // tabBarIcon:()=> {
            //     <Ionicons name = "md-compass" size = {24} /> 
            // }
        }
    }
});

export default HomeScreenTabNavigator; 