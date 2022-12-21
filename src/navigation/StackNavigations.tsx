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
        headerMode: 'float',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};
