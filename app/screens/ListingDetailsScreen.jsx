import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import ListItem from "../components/ListItem";
import colors from "../constants/colors";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/chair.jpg")}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red Chair</Text>
        <Text style={styles.subTitle}>$100</Text>
      </View>

      <View style={styles.userContainer}>
        <ListItem
          title="Charan"
          subTitle="5 Listings"
          image={require("../../assets/images/chair.jpg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    elevation:10,
    backgroundColor:colors.light,
    borderRadius:15,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 18,
    color: colors.medium,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
    paddingHorizontal: 15,
  },
});

export default ListingDetailsScreen;
