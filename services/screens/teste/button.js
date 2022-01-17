import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const ButtonAdd = () => {
  const [name, setName] = useState('');

  return( 
    <View style={styles.container}>
      <Text style={styles.textView}>BRUNO</Text>
      <Text>{name}</Text>
        <View style={styles.icon}>
        <Icon name="pluscircle" size={50} onPress={() => setName('Bia')} />
        </View>
    </View>
  )
}

export default ButtonAdd 

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  icon:{
    marginTop: 50,
  },
  textView: {
   
  }
})