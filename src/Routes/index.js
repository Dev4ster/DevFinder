import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import Home from '../Pages/Home';

import QrCode from '../Pages/QrCode';
import StarRed from '../Pages/StarRed';

const Tab = createBottomTabNavigator();
const tabOptions = {
  QrCode: {
    tabBarLabel: 'Qr Code',
    tabBarIcon: ({color, size}) => (
      <MaterialCommunityIcons name="qrcode" color={color} size={size} />
    ),
  },
  devFinder: {
    tabBarLabel: 'Buscar Devs',
    tabBarIcon: ({color, size}) => (
      <MaterialCommunityIcons name="account-search" color={color} size={size} />
    ),
  },
  devStar: {
    tabBarLabel: 'Favoritos',
    tabBarIcon: ({color, size}) => (
      <MaterialCommunityIcons name="account-star" color={color} size={size} />
    ),
  },
};

tabOptions.QrCode.tabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
tabOptions.devFinder.tabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
tabOptions.devStar.tabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          inactiveTintColor: 'rgb(255,255,255)',
          activeTintColor: 'rgb(57, 44, 97)',

          labelStyle: {
            color: 'rgb(255,255,255)',
            fontWeight: 'bold',
          },
          style: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(110, 77, 193)',
          },
        }}>
        <Tab.Screen
          name="QrCode"
          component={QrCode}
          options={tabOptions.QrCode}
        />
        <Tab.Screen
          name="FindDev"
          component={Home}
          options={tabOptions.devFinder}
        />

        <Tab.Screen
          name="Stared"
          component={StarRed}
          options={tabOptions.devStar}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
