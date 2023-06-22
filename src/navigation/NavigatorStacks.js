import React, { Component } from 'react';
import { View, Text, Platform, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"




// Screens

import Home from '../home';
import Details from '../details';










const Stack = createStackNavigator();



const HomeStack = () => {

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false, headerShown: false, }}


    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ sidebar: true }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ sidebar: true }}
      />

    </Stack.Navigator>
  );
}

const Navigator = () => {




  return (
    <NavigationContainer>
      <HomeStack />

    </NavigationContainer>
  )
}

export default Navigator
