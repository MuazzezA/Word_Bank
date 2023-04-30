import React from 'react';
import {Text as RNText} from 'react-native';
import styles from './styles';

export const Text = ({text, overStyle, children}) => {
  const content = text || children;
  return <RNText style={[styles.text, overStyle]}>{content}</RNText>;
};
