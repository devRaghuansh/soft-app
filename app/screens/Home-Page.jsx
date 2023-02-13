import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const HomePage = () => {
    return (  
        <View style={styles.screenContainer}> 
        <LinearGradient colors={['#a6c0fe', '#fed6e3']} style={styles.linearGradient}>
                <Text style={styles.mainText}> Welcome</Text>
                <Text style={styles.mainText}> to</Text>
                <Text style={styles.mainText}> SoftMange</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    mainText: {
        color: 'blue',
        fontSize: 18,
        fontWeight: 600
    }
})

export default HomePage