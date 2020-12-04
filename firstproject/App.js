import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const App = () => {

  let [name, setName] = useState("Huzaifa Nadir");
  // let [email, setEmail] = useState("Huzaifa@gmail.com")
  // let [skills, setSkills] = useState(["HTML5", "CSS3", "JavaScript"])
  // let [obj, setObj] = useState({ name: "Huzaifa", email: "Huzaifa@gmail.com" })
  // const handleClick = () => {
  //   setName("Waleed Khan");
  //   setEmail("Waleed@gmail.com")
  //   setSkills([...skills, "React", "React Native"])
  //   setObj({...obj, name:"Shafeeq"})
  // }

  useEffect(() => {
    console.log("Run on every render")
  })

  useEffect(() => {
    console.log("Run on first render")
  }, [])

  useEffect(() => {
    console.log("Run when the value of name is updated")
  }, [name])

  useEffect(() => {
    return () => {
      console.log("Unmounting")
    }
  })


  return (
    <View style={styles.container}>
      <Text> React Native Expo.</Text>
      <Text> {name}</Text>

      {/* <Text>Name: {name}.</Text>
      <Text> Email: {email}.</Text>
      <Text> Skills:
        {skills.map((v, i) => {
        return <Text key={i} >
          {`${v} `}
        </Text>
      })}
      </Text>
      <Text>{obj.name}</Text>
      <Text>{obj.email}</Text>
      <Button title="Click Me" onPress={handleClick} /> */}
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
