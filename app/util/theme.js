import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {colors} from './colors';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.darkPurple,
    secondary: colors.africanViolet,
    accent: colors.pompAndPower,
  },
};
export default theme;

// icons
// https://pictogrammers.com/library/mdi/
