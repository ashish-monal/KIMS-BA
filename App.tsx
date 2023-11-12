import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Registration from './src/screen/Registration'
import Splash from './src/screen/Splash'
import Welcome from './src/screen/Welcome'
import AuthNavigation from './src/navigation/AuthNavigation'

const App = () => {
  return (
   <AuthNavigation/>
  )
}

export default App

const styles = StyleSheet.create({})