import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewWordScreen} from '../screens';

const Stack = createNativeStackNavigator();

export default WordStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="new-word-screen" component={NewWordScreen} />
    </Stack.Navigator>
  );
};
