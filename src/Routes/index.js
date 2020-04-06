import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../Pages/Home';

import QrCode from '../Pages/QrCode';
import StarRed from '../Pages/StarRed';

import Menu from '../Components/MenuNavigator';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={Menu}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="QrCode" component={QrCode} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
