import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import About from '../screens/About';
import Camera from '../screens/Camera';
import ImagePickerComp from '../screens/ImagePicker';

const Stack = createStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Camera" component={Camera} />
                <Stack.Screen name="ImagePicker" component={ImagePickerComp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;