import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from '../components/BottomTab'
import { Home, CreateSet, AllCards } from '../screens'

const { Navigator, Screen } = createBottomTabNavigator();

console.log('')

const deneme = "";

const TabNavigator = () => (
  <Navigator screenOptions={{ headerShown: false}}
  tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={Home}/>
    <Screen name='CreateSet' component={CreateSet}/>
    <Screen name='AllCards' component={AllCards}/>
  </Navigator>
);

export const RouterNavigation = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);