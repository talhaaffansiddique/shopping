import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Roboto",
          fontStyle: "italic",
          fontWeight: "bold",
          color: "tomato",
          textTransform: "lowercase",
          textDecorationLine: "line-through",
          textAlign: "center",
          lineHeight: 35,
        }}
      >
        i love REACT NATIVE app!!!! this is my first react native app......
      </Text>
    </View>
  );
}
