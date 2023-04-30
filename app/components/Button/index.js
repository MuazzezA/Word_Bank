import * as React from 'react';
import {Button as NPButton} from 'react-native-paper';
import styles from './styles';
import {Text} from '../Text';

export const Button = ({
  icon,
  mode = 'contained',
  text,
  overStyle,
  rest,
  onPress,
}) => (
  <NPButton
    icon={icon}
    mode={mode}
    style={[styles.button, overStyle]}
    onPress={onPress}
    {...rest}>
    <Text overStyle={mode !== 'contained' && styles.darkText}>{text}</Text>
  </NPButton>
);
