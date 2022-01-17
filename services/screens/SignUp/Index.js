import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const SignUp = ({navigation}) => {
    return (
        <View>
            <Icon name="arrowleft" size={100} onPress={() => navigation.navigate("SignIn")}/>
        </View>
    )

}

export default SignUp;

const styles = StyleSheet.create ({ 
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})