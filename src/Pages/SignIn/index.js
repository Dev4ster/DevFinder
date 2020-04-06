import React, {useState} from 'react';
import {View, Dimensions, ScrollView, Animated} from 'react-native';
import PropTypes from 'prop-types';
import SvgUri from 'react-native-svg-uri';
import loginFigure from '../../Assets/Image/loginFigure.svg';

import Button from '../../Components/Button';
import Input from '../../Components/Input';

import {
  PictureSign,
  ContentView,
  TitleLogin,
  InputGroup,
  InputArea,
  Label,
  ForgotPassword,
  ForgotPasswordText,
} from './styles';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;
export default function SignIn({login}) {
  const [leftAnimationPosisiton] = useState(
    new Animated.Value(-windowWidth + 100)
  );

  const [topAnimationPosisiton] = useState(
    new Animated.Value(windowHeight / 2 - 150)
  );

  const [opacityAnimation] = useState(new Animated.Value(0));

  const [opacityAnimation2] = useState(new Animated.Value(0));

  const [pageTitle, setPageTitle] = useState('');

  const [pageTop, setPageTop] = useState(false);

  const titleFinal = '';

  React.useEffect(() => {
    async function type() {
      if (!pageTop) return;

      if (titleFinal.length === pageTitle.length) {
        await new Promise(() =>
          setTimeout(() => setPageTitle(`${pageTitle}_`), 100)
        );
      }

      if (titleFinal.length < pageTitle.length) {
        await new Promise(() =>
          setTimeout(() => setPageTitle(pageTitle.replace('_', '')), 100)
        );
      }

      await new Promise(() =>
        setTimeout(
          () =>
            setPageTitle(pageTitle + titleFinal.split('')[pageTitle.length]),
          100
        )
      );
    }
    type();
  }, [pageTitle, pageTop]);

  React.useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(leftAnimationPosisiton, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(topAnimationPosisiton, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnimation, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() =>
      Animated.timing(opacityAnimation2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => setPageTop(!pageTop))
    );
  }, [
    leftAnimationPosisiton,
    topAnimationPosisiton,
    opacityAnimation,
    opacityAnimation2,
    pageTop,
  ]);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <PictureSign
          style={{transform: [{translateX: leftAnimationPosisiton}]}}>
          <SvgUri
            width={windowWidth}
            height={windowWidth - 35}
            source={loginFigure}
          />
        </PictureSign>

        <ContentView
          marginTop={windowWidth - 35}
          style={{
            opacity: opacityAnimation,
            transform: [{translateY: topAnimationPosisiton}],
          }}>
          <TitleLogin> {pageTitle} </TitleLogin>
          <InputArea>
            <InputGroup increaseMargin="40px 0 5px">
              {/* <Label>Login:</Label> */}
              <Input placeholder="Digite seu E-mail" />
            </InputGroup>
            <InputGroup increaseMargin="10px 0 5px">
              {/* <Label>Senha:</Label> */}
              <Input placeholder="Digite sua senha" />
            </InputGroup>
            <InputGroup increaseMargin="10px 0 5px">
              <Button title="Login2" onPress={() => login()} />
            </InputGroup>
          </InputArea>
          <ForgotPassword style={{opacity: opacityAnimation2}}>
            <ForgotPasswordText>Lembrar Senha</ForgotPasswordText>
          </ForgotPassword>
        </ContentView>
      </View>
    </ScrollView>
  );
}

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
};
