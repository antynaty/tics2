import React from 'react';
import { 
    StyleSheet, 
    TextInput, 
    View,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView
} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TextInput 
                    placeholder="User name/email"
                    placeholderTextColor="#000000"
                    keyboardType= 'email-address'
                    returnKeyType= 'next'
                    style={styles.input}
                    onSubmitEditing={()=> this.refs.txtPassword.focus()}
                />
                <TextInput 
                    placeholder="Password"
                    placeholderTextColor="#000000"
                    returnKeyType= 'go'
                    sourceTextEntry
                    style={styles.input}
                    refs={"textPassword"}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}> INGRESAR </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
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
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        //backgroundColor: '#EFFBFB',
        height:40,
        marginBottom:10,
        color:'#000000',
        paddingHorizontal: 10
    },
    buttonContainer: {
        padding: 15,
        backgroundColor:'#FFBF00',
    },
    buttonText: {
        color:'#000000',
        textAlign:'center',
        fontSize: 18
    }
});