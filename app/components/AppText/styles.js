import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 24,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 30,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default styles;
