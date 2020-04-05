import React from 'react';
import {Button, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {title} from '../../Styles/Typography';

import AuthService from '../../Services/AuthService';

import { useForm } from 'react-hook-form';

import { Container, Label, Input, FormButton } from './styles';

export default function SignIn({login}) {
  const submitForm = data => {
    AuthService.login(data.user, data.password)
      .then(data => {
        login();
      })
      .catch(err => {
        console.log(err);
        Alert.alert("Ocorreu um erro.", "Por favor, revise seus dados e tente novamente!");
      });
  }

  const {register, handleSubmit, setValue} = useForm();

  React.useEffect(() => {
    register("user");
    register("password");
  }, [register]);

  return (
    <Container>

      <Label>User</Label>
      <Input onChangeText={ value => setValue("user", value) } />
      <Label>Password</Label>
      <Input secureTextEntry onChangeText={ value => setValue("password", value) } />

      <FormButton title="Login" onPress={handleSubmit(submitForm)} />
    </Container>
  );
}

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
};
