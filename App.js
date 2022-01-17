import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./services/routes/routes";

const App = () => {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )

}

export default App 

