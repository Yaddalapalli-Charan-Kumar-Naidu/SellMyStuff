import { View, Text, FlatList,StyleSheet } from "react-native";
import React from "react";

import ListingCard from "../components/ListingCard";
const ListingScreen = () => {
  const listings = [
    {
      id: 1,
      title: "Red jacket for sale",
      price: 100,
      image: require("../../assets/images/chair.jpg"),
    },
    {
      id: 2,
      title: "Couch in great condition",
      price: 1000,
      image: require("../../assets/images/chair.jpg"),
    },
    {
        id: 3,
        title: "Red jacket for sale",
        price: 100,
        image: require("../../assets/images/chair.jpg"),
      },
      {
        id: 4,
        title: "Red jacket for sale",
        price: 100,
        image: require("../../assets/images/chair.jpg"),
      },
  ];
  return (
    <View style={styles.container}>
      <Text>Listing Screen</Text>
      <FlatList

        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <ListingCard
            Title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
        separatorComponent={() => <View style={{ width: 10,border:2 }} />}
      />
    </View>
  );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    }
})

export default ListingScreen;
