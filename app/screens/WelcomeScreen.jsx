import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/colors";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.subContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/images/logo-red.png")}
              style={styles.image}
            />
            <Text style={styles.text}>Sell What You Don't Need</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.loginButton]}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.signupButton]}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  text: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  loginButton: {
    width:'100%',
    backgroundColor: colors.primary,
  },
  signupButton: {
    width:"100%",
    backgroundColor: colors.secondary,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;