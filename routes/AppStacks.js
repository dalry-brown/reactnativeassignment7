import React from 'react'
import StartsWith from '../views/StartsWith'
import EndsWith from '../views/EndsWith'
import RhymesWith from '../views/RhymesWith'
import Home from '../views/Home'
import RelatedTo from '../views/RelatedTo'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStacks = () => {

    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer       
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>

        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Starts" component={StartsWith} />
            <Stack.Screen name="Ends" component={EndsWith} />
            <Stack.Screen name="Rhymes" component={RhymesWith} />
            <Stack.Screen name="Related" component={RelatedTo} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStacks