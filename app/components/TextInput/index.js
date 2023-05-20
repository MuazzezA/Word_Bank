import * as React from 'react';
import {TextInput as NPTextInput} from 'react-native-paper';
import styles from './styles';
export const TextInput = ({label, value, onChangeText, ...rest}) => {
  return (
    <NPTextInput
      label={label}
      mode="outlined"
      value={value}
      style={styles.input}
      outlineStyle={styles.outline}
      onChangeText={text => onChangeText(text)}
      {...rest}
    />
  );
};
