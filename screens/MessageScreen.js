import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../app/components/ListItem";
import ListItemDeleteAction from "../app/components/ListItemDeleteAction";
import ListItemSeperator from "../app/components/ListItemSeperator";
import Screen from "../app/components/Screen";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  // const count = array[0];
  // const setCount = array[1]; //setState

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));

    // Call the server
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default MessageScreen;
