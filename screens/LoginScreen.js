import { Button, Input, Image } from "react-native-elements";
import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import image from '../images/5098293.jpg'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <StatusBar style='light'/>
            <Image source={{
                uri: "https://ibb.co/PCdGbKr"
            }}
            style={{width: 200, height:200}}
            />
            <View style={styles.inputContainer}>
                <Input 
                placeholder="Email" 
                autoFocus
                type="email"
                value={email}
                onChangeText={(text)=> setEmail(text)}
                />
                <Input 
                placeholder="Password" 
                secureTextEntry 
                type="password"
                value={password}
                onChangeText={(text)=> setPassword(text)}
                />
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer: {},
})
