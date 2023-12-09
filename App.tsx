import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Game from './screens/Game';
import Result from './screens/Result';
import ScoreBoard from './screens/ScoreBoard';
export default function App() {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    StatusBar.setBackgroundColor('black');
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Game' component={Game}  />
        <Stack.Screen name='Result' component={Result} />
        <Stack.Screen name='ScoreBoard' component={ScoreBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}