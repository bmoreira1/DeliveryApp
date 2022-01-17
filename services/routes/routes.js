import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from "../screens/SignIn/Index";
import SignUp from "../screens/SignUp/Index";

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator> 
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
        </Stack.Navigator>
    )
}

export default Routes;