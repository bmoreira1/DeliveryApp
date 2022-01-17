import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const SignIn = ({navigation}) => {
    return (
        <View> 
            <Icon name="arrowright" size={100} onPress={() => navigation.navigate("SignUp")}/>
        </View>
    )

}

export default SignIn;

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    }
})