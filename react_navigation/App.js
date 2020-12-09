import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Navigation from './src/config/Navigation';

export default function App() {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
