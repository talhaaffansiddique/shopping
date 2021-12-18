import React, { useState } from "react";
import { Switch, View, StyleSheet, TextInput, Text } from "react-native";
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
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
