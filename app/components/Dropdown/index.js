import React from 'react';
import {View} from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import styles from './styles';

export const Dropdown = ({
  label,
  value,
  setValue,
  dataList,
  showDropDown,
  setShowDropDown,
  ...rest
}) => {
  return (
    <View style={styles.dropdownContainer}>
      <DropDown
        label={label}
        mode={'outlined'}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={value}
        setValue={setValue}
        list={dataList}
        dropDownItemSelectedStyle={styles.selectedItem}
        dropDownItemSelectedTextStyle={styles.selectedItemText}
        {...rest}
      />
    </View>
  );
};
