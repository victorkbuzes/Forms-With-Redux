import { View, Text } from 'react-native'
import React, { useState } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { JokesScreen } from './JokesScreen';
import { CategoriesScreen } from './CategoriesScreen';
const Tab = createBottomTabNavigator();


export const HomeScreen = () => {
   
  return (
    <Tab.Navigator>
    <Tab.Screen name="jokes" component={JokesScreen}  />
    <Tab.Screen name = "categories" component={CategoriesScreen} />

</Tab.Navigator>
  )
}


