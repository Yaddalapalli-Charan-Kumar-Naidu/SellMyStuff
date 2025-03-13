import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.subContainer}>
            <View>
                <Image
                source={require("../../assets/images/logo-red.png")}
                style={styles.image}
                />
                <Text style={styles.text}>Sell What You Don't Need</Text>
            </View>
            <View>
                <View style={styles.login}></View>
                <View style={styles.signup}></View>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  subContainer: {
    flex:1,
    justifyContent: "space-around",
    
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center", // Align children components to the center
  },    
  text: {
    color: "black",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center", // Center-align the text
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center", // Center-align the image
    marginBottom: 20, // Add space between image and text
  },
  login: {
    width: "100%",
    height: 70,
    backgroundColor: "red",
    marginBottom: 10, // Add space between buttons
  },
  signup: {
    width: "100%",
    height: 70,
    backgroundColor: "green",
  },
});

export default WelcomeScreen;
