import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require('../../images/hat.png')} 
                />
                <Text style={styles.title}> CocinApp</Text>
            </View>
            <View style={styles.infoContainer}>
                <LoginForm />
            </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F7F8E0',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo:{
    width: 200, // ancho
    height: 142
  },
  title:{
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    opacity:0.9
  }
 
});