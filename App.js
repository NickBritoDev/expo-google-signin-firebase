import React from 'react';
import Navigation from './navigation';
import { ThemeProvider } from 'react-native-magnus';
import { AppRegistry } from 'react-native';

export default function App() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  )
}

AppRegistry.registerComponent('main', () => Main);
