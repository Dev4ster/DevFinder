import React, {useState} from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  NavigatorContainer,
  NavigatorItem,
  NavigatorContent,
} from './styles';

export default function MenuNavigator({state, descriptors, navigation}) {
  const navigate = (to) => {
    navigation.navigate(to);
  };

  const isActiveHome = state.index === 0;
  const isActiveQrcode = state.index === 1;

  return (
    <Container>
      <NavigatorContainer>
        <NavigatorItem
          active={isActiveHome}
          first
          onPress={() => navigate('Home')}>
          <Icon name="view-list" size={22} color="#5A54FF" />
          <NavigatorContent>Pesquisar</NavigatorContent>
        </NavigatorItem>
        <NavigatorItem
          active={isActiveQrcode}
          last
          onPress={() => navigate('QrCode')}>
          <Icon name="qrcode" size={22} color="#5A54FF" />
          <NavigatorContent>QRCODE</NavigatorContent>
        </NavigatorItem>
      </NavigatorContainer>
    </Container>
  );
}
