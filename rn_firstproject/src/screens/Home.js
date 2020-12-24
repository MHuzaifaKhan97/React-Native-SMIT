import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
// import ImagePickerComp from './ImagePicker';

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello React Native
            </Text>
            <Button title="Camera" onPress={() => props.navigation.navigate("Camera")} />
            <Button title="About" onPress={() => props.navigation.navigate("About")} />
            <Button title="ImagePicker" onPress={() => props.navigation.navigate("ImagePicker")} />
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 32
    }
})