import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WordStack from './word-stack';
import HomeStack from './home-stack';
import ProfileStack from './profile-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {sizes} from '../util/sizing';
import {colors} from '../util';
const Tab = createBottomTabNavigator();

const TabBar = ({state, descriptors, navigation, icon}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{
              flex: 1,
              height: sizes.bottomTabHeight,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              borderRadius: 10,
              margin: 5,
              backgroundColor: isFocused ? colors.darkPurple : '#fff',
              flexDirection: 'row',
            }}>
            <Icon name={icon[index]} color={colors.platinum} size={25} />
            <Text
              style={{color: isFocused ? colors.platinum : colors.darkPurple}}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.bottomContainer,
      }}
      tabBar={props => (
        <TabBar {...props} icon={['home', 'plus-circle', 'user']} />
      )}>
      <Tab.Screen name="home-stack" component={HomeStack} />
      <Tab.Screen name="word-stack" component={WordStack} />
      <Tab.Screen name="profile-stack" component={ProfileStack} />
    </Tab.Navigator>
  );
};
export default BottomNav;

const styles = StyleSheet.create({
  bottomContainer: {
    paddingTop: sizes.base,
    backgroundColor: '#fff',
    height: sizes.bottomTabHeight,
  },
});
