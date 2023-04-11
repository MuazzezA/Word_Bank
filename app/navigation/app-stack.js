import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './home-stack';
import AuthStack from './auth-stack';

const Stack = createNativeStackNavigator();

export default AppStack = () => {
  const isAuth = false;
  // dont forget splash screen
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isAuth ? (
          <>
            <Stack.Screen name="home-stack" component={HomeStack} />
            <Stack.Screen name="word-stack" component={HomeStack} />
            <Stack.Screen name="profile-stack" component={HomeStack} />
          </>
        ) : (
          <Stack.Screen name="auth-stack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
