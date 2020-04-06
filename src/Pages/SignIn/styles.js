import styled, {css} from 'styled-components/native';
import {darken} from 'polished';
import {Animated} from 'react-native';
import {colors} from '../../Styles/Colors';
import {h1, labelInput} from '../../Styles/Typography';

export const PictureSign = styled(Animated.View)`
  position: absolute;
`;

export const ContentView = styled(Animated.View)`
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  flex: 1;
  position: relative;
`;

export const TitleLogin = styled.Text`
  color: ${colors.primary};
  font-size: ${h1.fontSize};
  font-weight: ${h1.fontWeight};
  position: absolute;
  top: 10px;
  height: 40px;
  width: 500px;
  margin: auto;
  right: 0;
  left: 20px;
`;

export const InputGroup = styled.View`
  margin: 5px 0 5px;

  ${(props) =>
    props.increaseMargin &&
    css`
      margin: ${props.increaseMargin};
    `}
`;

export const InputArea = styled.View`
  margin: 20px 0 20px;
`;

export const Label = styled.Text`
  color: ${labelInput.color};
  font-weight: ${labelInput.fontWeight};
  font-size: ${labelInput.fontSize};
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const ForgotPassword = styled(Animated.View)``;

export const ForgotPasswordText = styled.Text`
  color: ${darken(0.4, colors.primary)};
  font-size: 12px;
`;
