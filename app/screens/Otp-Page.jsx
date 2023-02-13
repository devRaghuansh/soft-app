import React, { useState } from 'react'
import { 
    View, 
    Text,
    Button,
    Pressable,
    TextInput,
    StyleSheet, 
    Alert
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const OtpPage = () => {
    const [loginId, setLoginId] =useState('')
    const submitLogin = () => {
        !loginId && Alert.alert('Please Enter the User Id')
    }
    return (  
        <View style={styles.screenContainer}> 
        <LinearGradient colors={['#a6c0fe', '#fed6e3']} style={styles.linearGradient}>
                <Text>Otp Verification</Text>
                <Pressable style={styles.button} onPress={() => submitLogin()}>
                    <Text style={styles.text}>Login</Text>
                </Pressable>
                <Pressable style={styles.signupButton}>
                    <Text style={styles.text}>Sign up</Text>
                </Pressable>
    </LinearGradient>
    </View>
    )
}
const styles = StyleSheet.create({
    screenContainer: {
        //backgroundColor: 'red',
        height: '100%',
        color: 'black'
    },
    linearGradient: {
        display: 'flex',
        flex: 1
    },
    inputLabel: {
        color: 'black' ,
        fontSize: 14
    },
    inputText: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0,0.1)',
        paddingHorizontal: 15, 
        paddingVertical: 1,
        borderRadius: 1,
        fontSize: 12,
        marginBottom: 10,
        width: 300,
        color: 'black'
    },
    button: {
        alignItems: 'center',
        width: 200,
        height: 60,
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#9400d3',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      signupButton: {
        alignItems: 'center',
        marginTop: 20,
        width: 200,
        height: 60,
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#808000'
      }
})

export default OtpPage