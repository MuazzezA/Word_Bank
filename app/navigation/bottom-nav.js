import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WordStack from './word-stack';
import HomeStack from './home-stack';
import ProfileStack from './profile-stack';
import {sizes} from '../util/sizing';
const Tab = createBottomTabNavigator();

export default BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.bottomContainer,
      }}>
      <Tab.Screen name="home-stack" component={HomeStack} />
      <Tab.Screen name="word-stack" component={WordStack} />
      <Tab.Screen name="profile-stack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    paddingTop: sizes.base,
    backgroundColor: '#fff',
    height: sizes.bottomTabHeight,
  },
});
