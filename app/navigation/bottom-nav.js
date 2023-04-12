import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WordStack from './word-stack';
import HomeStack from './home-stack';
import ProfileStack from './profile-stack';
const Tab = createBottomTabNavigator();

export default BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="home-stack" component={HomeStack} />
      <Tab.Screen name="word-stack" component={WordStack} />
      <Tab.Screen name="profile-stack" component={ProfileStack} />
    </Tab.Navigator>
  );
};
