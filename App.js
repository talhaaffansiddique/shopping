import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";

import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import MessageScreen from "./screens/MessageScreen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./screens/AccountScreen";
import ListingScreen from "./screens/ListingScreen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <Text> {firstName} </Text>
      <TextInput
        keyboardType="numeric"
        secureTextEntry
        // clearButtonMode="always"   on ios

        onChangeText={(text) => setFirstName(text)}
        placeholder="First name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
      />
    </Screen>
  );
}
