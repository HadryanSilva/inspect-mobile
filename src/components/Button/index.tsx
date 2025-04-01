import React, { ReactElement } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

import { theme } from '../../global/styles/theme';

interface ButtonProps extends TouchableOpacityProps {
  title: string | ReactElement;
  textStyle?: object;
}

const { primary, text } = theme;

export const Button = ({
  title,
  style,
  onPress,
  textStyle,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      {...rest}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: primary,
    height: 50,
    width: '80%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: text,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
