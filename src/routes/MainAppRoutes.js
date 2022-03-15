import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../components/HomeScreen'
import BookingHistory from '../components/BookingHistory'
import QrScan from '../components/QrScan'
import TestingScreen from '../components/TestingScreen'
const Stack = createNativeStackNavigator()

function MainAppRoutes () {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='TestingScreen' component={TestingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainAppRoutes