
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../Screens/HomeScreen';
import { UserScreen } from '../Screens/UserScreen';


const Stack = createNativeStackNavigator();



export const RootNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
         
            <Stack.Screen name="user" component={UserScreen} options={{ headerShown: false }} />
            <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} /> 

        </Stack.Navigator>


    </NavigationContainer>

   
  )
}





