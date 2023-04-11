import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaView, StyleSheet} from 'react-native';
import theme from './util/theme';
import AppStack from './navigation/app-stack';

export default function App() {
  return (
    // Wrap your app in the Store component
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <AppStack />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
