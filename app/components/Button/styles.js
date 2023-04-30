import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../util';
export default StyleSheet.create({
  button: {
    width: sizes.buttonWidth,
    height: sizes.buttonHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkText: {
    color: colors.darkPurple,
  },
});
