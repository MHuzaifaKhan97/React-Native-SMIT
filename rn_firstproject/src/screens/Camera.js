import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {RNCamera} from 'react-native-camera';

const Camera = () => {
    return (
            <RNCamera style={styles.preview} type={RNCamera.Constants.Type.front} />
    )
}
export default Camera;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });