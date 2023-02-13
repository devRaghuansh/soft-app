import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import AppLock from './app/screens/App-Lock'
import HomePage from './app/screens/Home-Page'
import LoginPage from './app/screens/Login-Page'
import OtpPage from './app/screens/Otp-Page'
import SignupPage from './app/screens/Signup-Page'

const App = () => {
  return (
    <View style={styles.containerView}>
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
      {/* <OtpPage /> */}
      {/* <SignupPage /> */}
      <AppLock />
    </View> 
  )
}

const styles = StyleSheet.create({
  containerView: {
    height: '100%',
  }
})
export default App