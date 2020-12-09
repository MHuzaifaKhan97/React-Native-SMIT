import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = (props) => {
    return (
        <View style={styles.container} >
            <Text style={styles.header}>
                Home Screen
            </Text>
            <View style={{ marginTop: 20 }}>
                <Button title="goto About" onPress={() => props.navigation.navigate('About', 
                {name: 'Huzaifa Khan',email:'huzaifa@gmail.com'})} 
            />
            </View>
            <View style={{ marginTop: 20 }}>
                <Button title="goto Contact" onPress={() => props.navigation.navigate('Contact')} />
            </View>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    header: {
        fontSize: 30,
    }
})