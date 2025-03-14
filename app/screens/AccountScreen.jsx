import React from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Expo icon set

// Dummy data for menu items
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "#4ECDC4", // Primary color
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: "#FF6F61", // Secondary color
    },
  },
];

const AccountScreen = () => {
  return (
    <View style={styles.screen}>
      {/* User Info Section */}
      <View style={styles.userContainer}>
        <Image
          style={styles.userImage}
          source={require("../../assets/images/chair.jpg")} // Make sure this path is correct or replace with a valid image URL
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Charan Kumar</Text>
          <Text style={styles.userEmail}>charankumarnaidu2004@gmail.com</Text>
        </View>
      </View>

      {/* Menu Items List */}
      <FlatList
        style={styles.flatList}
        data={menuItems}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: item.icon.backgroundColor },
              ]}
            >
              <MaterialCommunityIcons
                name={item.icon.name}
                size={25}
                color="#fff"
              />
            </View>
            <Text style={styles.listItemTitle}>{item.title}</Text>
          </View>
        )}
      />

      {/* Log Out Section */}
      <View style={styles.listItem}>
        <View style={[styles.iconContainer, { backgroundColor: "#ffe66d" }]}>
          <MaterialCommunityIcons name="logout" size={25} color="#fff" />
        </View>
        <Text style={styles.listItemTitle}>Log Out</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f8f4f4", // Light background color
    padding: 10,
    marginBottom:10,

  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  userInfo: {
    justifyContent: "center",
  },
  flatList: {
    flex: 1,  // Ensures FlatList takes the available space
    marginTop: 10, // Adjusts the spacing between the user info and list items
    borderRadius: 20,
    backgroundColor: "#fff",
    marginBottom:10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
  },
  userEmail: {
    fontSize: 14,
    color: "#888",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 5, // Provides space between items
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginHorizontal: 20, // Adds horizontal margin to the separator
  },
});

export default AccountScreen;
