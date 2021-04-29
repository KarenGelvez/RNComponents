import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../containers/HomeScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};