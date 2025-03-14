import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import ListItem from "../components/ListItem";
import colors from "../constants/colors";

const ListingDetailsScreen = () => {
  // Dummy data
  const listing = {
    title: "Stylish Red Chair",
    price: 120,
    image: require("../../assets/images/chair.jpg"),
    description:
      "This is a stylish and comfortable red chair, perfect for modern interiors. Crafted with premium materials.",
    seller: {
      name: "Charan Kumar",
      listings: 5,
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={listing.image} />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subTitle}>${listing.price}</Text>
        <Text style={styles.description}>{listing.description}</Text>
      </View>

      <View style={styles.userContainer}>
        <ListItem
          title={listing.seller.name}
          subTitle={`${listing.seller.listings} Listings`}
          image={require("../../assets/images/chair.jpg")}
        />
      </View>

      <TouchableOpacity
        style={styles.contactButton}
        onPress={() => console.log("Contact Seller")}
      >
        <Text style={styles.contactText}>Contact Seller</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.light,
    elevation: 10,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: colors.dark,
    lineHeight: 22,
    marginTop: 10,
  },
  userContainer: {
    paddingHorizontal: 15,
    marginVertical: 30,
  },
  contactButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 30,
  },
  contactText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ListingDetailsScreen;
