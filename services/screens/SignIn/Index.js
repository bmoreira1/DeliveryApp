import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import AroundButton from "../../components/AroundButton";

const SignIn = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>       
                <Icon name="mail" size={20} />
                <TextInput placeholder="Entre com o seu E-mail "/>
            </View>
            <View style={styles.inputView}>       
                <Icon name="lock" size={20} />
                <TextInput placeholder="************ "/>
            </View>
            <View style={{flexDirection: "row", margin: 15}}>
                <Text>
                    Não é cadastrado?
                </Text>
                <TouchableOpacity style={{marginLeft: 6}}  onPress={() => navigation.navigate("SignUp")}>
                    <Text>
                        Criar
                    </Text>
                </TouchableOpacity>
            </View>
            <AroundButton title="entrar" size={23} iconName="arrow-right" color={"white"}/>
        </View>
    )

}

export default SignIn;

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    inputView:{
        width: "80%",
        height: 48,
        backgroundColor: "#f1f3f6",
        borderRadius: 8,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 10
    }
})