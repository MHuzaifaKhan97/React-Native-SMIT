import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Contact = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.header}>
                Contact Screen
            </Text>
        </View>
    )
}
export default Contact;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    header:{
        fontSize:30,
    }
})