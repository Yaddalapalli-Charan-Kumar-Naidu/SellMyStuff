import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

const RegisterScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require("../../assets/images/background.jpg")} style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Create Account</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons name="person" size={24} color={colors.gray} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor={colors.gray}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={24} color={colors.gray} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={colors.gray}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock" size={24} color={colors.gray} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={colors.gray}
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock" size={24} color={colors.gray} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={colors.gray}
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={[styles.button, styles.signupButton]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.link}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.linkText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  formContainer: {
    width: "100%",
    backgroundColor: colors.white,
    padding: 25,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.black,
    textAlign: "center",
    marginBottom: 25,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: colors.black,
  },
  button: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  signupButton: {
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    alignItems: "center",
    marginTop: 10,
  },
  linkText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default RegisterScreen;