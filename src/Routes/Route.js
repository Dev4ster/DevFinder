import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Menu from '../Components/MenuNavigator';

export default function Route({name, component}) {
  return createStackNavigator().Screen({
    name,
    component,
  });
}
