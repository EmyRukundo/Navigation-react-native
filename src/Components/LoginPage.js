import React from 'react';
import {Text, TextInput, Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';


export class LoginPage extends Component {
    render (){
        return (
            <View style={StyleSheet.container}>
                <View style={styles.textfields}>
                     <TextInput style={styles.input}>
                         placeholder="username"
                         returnKeyType="next"
                         onSubmitEditing= {() => this.passwordInput.focus()}
                         keyboardType= "email-address"
                         autoCapitalize="none"
                         autoCorrect={false}
                     </TextInput>
                     <TextInput style={styles.input}>
                         placeholder="password"
                         returnKeyType="go"
                         secureTextEntry
                         ref ={(input) => this.passwordInput = input}
                     </TextInput>
                     <TouchableOpacity style={styles.buttoncontainer}>
                         <Text style={styles.buttontext}>Login</Text>
                     </TouchableOpacity>
                     <Button
                     title="Register Here"
                     color= "$1abc9c"
                     onPress= {() => this.props.navigation.navigate('Register')}
                      />
                     </View>
            </View>
        );
    }
}
const AppStackNavigator = createStackNavigator({
    Login: LoginPage,
    Register: RegisterPage,
    Home: Homepage
});

const styles = {
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    input: {
        paddingLeft: 20,
        borderradius: 50,
        height: 50,
        fontSize: 25,
        backgroundColor: 'white',
        borderWidth: 1,
        marginBottom: 20,
        color: '#34495e'
    },
    buttoncontainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#1abc9c',
        paddingVertcial: 10,
        justifyContent: 'center'
    },
    buttontext: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontSize: 20
    }

}