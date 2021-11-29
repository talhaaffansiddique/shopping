import React from "react";
import { View, StyleSheet } from "react-native";

import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./screens/WelcomeScreen";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red Jacket for sale"
        subTitle="$100"
        image={require("./assets/jacket.jpg")}
      />
    </View>
  );
}
