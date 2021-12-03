import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

import ListItem from "../app/components/ListItem";
// import Screen from "../app/components/Screen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },

  {
    id: 2,
    title: "T2",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
];

function MessageScreen(props) {
  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{ width: "100% ", height: 1, backgroundColor: "black" }}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default MessageScreen;
