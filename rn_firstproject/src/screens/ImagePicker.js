import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }], // optional hai customButton
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

const ImagePickerComp = () => {
    

    const open_picker = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log(source)
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

               
            }
        });
    }

    return (
        <View>
            <Button onPress={open_picker} title="Open Image Picker" />
        </View>
    )
}
export default ImagePickerComp;
