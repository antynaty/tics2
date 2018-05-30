import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View
} from 'react-native';

export default class Camera extends React.Component {
  render() {
    return (
        <View style= {styles.container}>
            <Text> Screen Camera </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        position:'absolute',
        left: 0,
        right:0,
        bottom:2
    }
});