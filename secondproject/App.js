import React from 'react';
import { StyleSheet,ImageBackground, Text, View, Image, TextInput, Button, 
  TouchableOpacity, ScrollView, FlatList, ActivityIndicator } from 'react-native';

const data = [
  { id: 1, title: 'JavaScript' },
  { id: 2, title: 'ReactJS' },
  { id: 3, title: 'React Native' },
  { id: 4, title: 'NodeJS' },
  { id: 5, title: 'Express JS' },
  { id: 6, title: 'MongoDB' },
]

export default function App() {

  // const changeHandler = (e) => {
  //   console.log(e)
  // }

  return (
    // <ScrollView>
    <View style={styles.container}>
      
      {/* Image Background Start */}

      <ImageBackground 
      style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}
      source={{uri:'data:image/jpeg;base64,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'}} >
        <Text style={{color:'#fff',fontSize:34}}>Image Background</Text>

        <ActivityIndicator size="large" color="#fff" />
      </ImageBackground>

      {/* Image Background End */}

      {/* Understanding Flex Start */}

      {/* <View style={styles.main1}></View>
      <View style={styles.main2}>
        <View style={styles.boxes}>
          <View style={styles.item}><Text>Item 1</Text></View>
          <View style={styles.item}><Text>Item 2</Text></View>
          <View style={styles.item}><Text>Item 3</Text></View>
          <View style={styles.item}><Text>Item 4</Text></View>
          <View style={styles.item}><Text>Item 5</Text></View>
          <View style={styles.item}><Text>Item 6</Text></View>
        </View>
      </View>
      <View style={styles.main3}></View> */}

      {/* Understanding Flex End */}

      {/* View, Text, TextInput, Button, TouchableOpacity Start */}

      {/* <Text style={styles.header}>Hello React Native</Text> */}
      {/* <Image style={styles.image} source={{uri:'https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990__340.png'}} /> */}
      {/* <Image style={styles.image} source={require('./assets/car.png')} /> */}
      {/* <TextInput keyboardType="default" secureTextEntry={true} onChangeText={(text) => console.log(text)} style={styles.input} placeholder="Enter Value" /> */}
      {/* <Button title="Click Me" onPress={() => alert("Cliked")}/> */}
      {/* or */}
      {/* <TouchableOpacity activeOpacity={0.8} onPress={() => alert("Pressed")} style={styles.button}>
        <Text style={styles.btnText} >Click Me</Text>
      </TouchableOpacity> */}

      {/* View, Text, TextInput,Button, TouchableOpacity End */}

      {/* Card Component Start */}
      {/* {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, i) => {
            return <View style={styles.card} key={i}>
              <Text style={styles.cardText}>Huzaifa Khan</Text>
            </View>
          })
        } */}

      {/* Card Component End */}

      {/* FlatList Start */}

      {/* <FlatList
      style={{width:'100%'}}
      // horizontal={true}
        data={data}
        renderItem={(data) => {
          return (<View style={styles.card}>
            <Text style={styles.cardText}>{data.item.title}</Text>
          </View>)
        }}
        keyExtractor={item => item.id}
      /> */}

      {/* FlatList Start */}

    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  },
  // header: {
  //   marginTop: 100,
  //   fontSize: 22,
  //   color: '#fff',
  // },
  // image: {
  //   width: 300,
  //   height: 300,
  //   resizeMode: 'contain'
  // },
  // input: {
  //   height: 40,
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   width: '80%',
  // },
  // button: {
  //   backgroundColor: 'purple',
  //   width: '80%',
  //   alignItems: 'center',
  //   padding: 10,
  // },
  // btnText: {
  //   color: 'white',
  //   fontWeight: '800'
  // },
  // main1: {
  //   backgroundColor: 'green',
  //   width: '100%',
  //   flex: 1
  // },
  // main2: {
  //   backgroundColor: 'pink',
  //   width: '100%',
  //   flex: 8,
  // },
  // main3: {
  //   backgroundColor: 'orange',
  //   width: '100%',
  //   flex: .7
  // },
  // boxes: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   flexWrap: 'wrap',
  //   alignContent: 'center'

  // },
  // item: {
  //   backgroundColor: '#fff',
  //   width: 100,
  //   height: 100,
  //   marginTop: 10,
  //   marginBottom: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // card: {
  //   marginTop: 50,
  //   height: 80,
  //   backgroundColor: '#fff',
  //   width: '80%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 9,
  //   },
  //   shadowOpacity: 0.48,
  //   shadowRadius: 11.95,

  //   elevation: 18,

  // },
  // cardText: {
  //   fontSize: 22,
  //   textTransform: 'uppercase',
  // }
});
