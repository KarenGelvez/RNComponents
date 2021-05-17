import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../containers/HomeScreen';
import {Animation01Screen} from '../containers/Animation01Screen';
import {Animation02Screen} from '../containers/Animation02Screen';
import {SwitchScreen} from '../containers/SwitchScreen';
import {AlertScreen} from '../containers/AlertScreen';
import {TextInputScreen} from '../containers/TextInputScreen';
import {PullToRefreshScreen} from '../containers/PullToRefreshScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation01" component={Animation01Screen} />
      <Stack.Screen name="Animation02" component={Animation02Screen} />
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="Alert" component={AlertScreen} />
      <Stack.Screen name="TextInput" component={TextInputScreen} />
      <Stack.Screen name="PullToRefresh" component={PullToRefreshScreen} />
    </Stack.Navigator>
  );
};
