import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image} from 'react-native';

import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{title:'Stack Navigation Example',
                headerStyle:{
                    backgroundColor:'orange',
                },
                headerTitle: props => <Image source={require('../../assets/logo.png')} style={{width:100,height:30,resizeMode:'contain'}} />
                }} component={Home} />
                <Stack.Screen options={{headerStyle:{backgroundColor:'orange'}}} name="About" component={About} />
                <Stack.Screen options={{headerStyle:{backgroundColor:'orange'}}} name="Contact" component={Contact} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;