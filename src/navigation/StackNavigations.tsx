import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from '../screens/FormScreen';
import { MainScreen } from '../screens/MainScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};
