import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';

import colors from "../constants/colors";

const screenHeight = Dimensions.get("window").height;

const ListingCard = ({ Title, subTitle, image }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{Title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 10,
        elevation: 5,
        marginBottom: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    image: {
        width: "100%",
        height: screenHeight * 0.25, // or a fixed number like 200
        resizeMode: "cover",
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subTitle: {
        fontSize: 15,
        color: colors.medium,
    }
});

export default ListingCard;
