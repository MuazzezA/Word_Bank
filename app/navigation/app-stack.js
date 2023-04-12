import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './auth-stack';
import BottomNav from './bottom-nav';

const Stack = createNativeStackNavigator();

export default AppStack = () => {
  const isAuth = true;
  // dont forget splash screen
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isAuth ? (
          <Stack.Screen name="bottom-tabs" component={BottomNav} />
        ) : (
          <Stack.Screen name="auth-stack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
