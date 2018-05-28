import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import { 
    createStackNavigator,
    createDrawerNavigator,
    SafeAreaView
} from 'react-navigation';

import Home from './Home/Home';

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: Home,
    }
});

export default AppDrawerNavigator;
