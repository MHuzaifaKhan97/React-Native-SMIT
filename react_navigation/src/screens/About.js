import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const About = ({ route }) => {

    const { name, email } = route.params;
    console.log(route.params)
    return (
        <View style={styles.container} >
            <Text style={styles.header}>
                About Screen
            </Text>
            <Text style={styles.text}>
                {name}
            </Text>
            <Text style={styles.text}>
                {email}
            </Text>
        </View>
    )
}
export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    header: {
        fontSize: 30,
    },
    text:{
        fontSize:20,
        marginTop:20,
    }
})