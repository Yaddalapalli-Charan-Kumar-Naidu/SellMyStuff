import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const MessageScreen = () => {
  const initialMessages = [
    {
      id: 1,
      title: "Charan",
      subTitle: "5 Listings",
      image: require("../../assets/images/chair.jpg"),
    },
    {
      id: 2,
      title: "Charan",
      subTitle: "5 Listings",
      image: require("../../assets/images/chair.jpg"),
    },
    {
      id: 3,
      title: "Charan",
      subTitle: "5 Listings",
      image: require("../../assets/images/chair.jpg"),
    },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
    console.log("Deleted:", message.id);
  };
  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setMessages(initialMessages);

      setRefreshing(false);
    }, 500);
    console.log("Refreshing...");
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Message Screen</Text>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginHorizontal: 15,
  },
});

export default MessageScreen;
