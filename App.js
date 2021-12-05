import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";

import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import MessageScreen from "./screens/MessageScreen";

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={100} backgroundColor="red" iconColor="white" />
    </Screen>
  );
}
