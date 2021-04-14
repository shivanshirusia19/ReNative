import React from "react";
import { View, Text } from "react-native";
import { Api } from "renative";
import Screen from "../components/Screen";

const App = () => (
  <View
    style={{
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      backgroundColor: "black",
    }}
  >
    <Screen />
  </View>
);

export default App;
