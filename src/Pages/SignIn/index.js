import React from 'react';
import {View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import {title} from '../../Styles/Typography';

export default function SignIn({login}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={title}> SignIn </Text>
      <Button title="Login" onPress={() => login()} />
    </View>
  );
}

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
};
