import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AroundButton = ({title, size, iconName, color, }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={{color: "white", fontSize: 18}}>{title}</Text>
            <Icon name={iconName} size={size} color={color}/>
        </TouchableOpacity>
    )
}
export default AroundButton;

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 60,
        flexDirection: "row",
        backgroundColor: "#F5CA48",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    }
})