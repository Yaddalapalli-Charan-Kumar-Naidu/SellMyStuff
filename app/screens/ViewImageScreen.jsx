import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.red}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={styles.green}>
          <Text style={styles.text}>Green</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/chair.jpg')} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1, // Allow the image container to take the remaining space
    justifyContent: 'center', // Center the image vertically
    alignItems: 'center', // Center the image horizontally
  },
  image: {
    width: '100%', // Adjust the width of the image
    height: '75%', // Adjust the height of the image
    resizeMode: 'contain', // Ensure the image scales properly
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20, // Optional: to add space from the top of the screen
  },
  red: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  green: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ViewImageScreen;
