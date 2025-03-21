import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  FlatList,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../constants/colors";
import * as ImagePicker from "expo-image-picker";

const categories = [
  { label: "Electronics", value: "electronics", icon: "tv" },
  { label: "Clothing", value: "clothing", icon: "shopping-bag" },
  { label: "Books", value: "books", icon: "book" },
  { label: "Furniture", value: "furniture", icon: "bed" },
  { label: "Others", value: "others", icon: "ellipsis-h" },
];

const AddProductScreen = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [images, setImages] = useState([]);

  // Request permissions on component mount
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission required", "We need access to your photo library to upload images.");
      }
    })();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!productName.trim()) newErrors.productName = "Product name is required";
    if (!price.trim()) newErrors.price = "Price is required";
    else if (isNaN(price)) newErrors.price = "Price must be a number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddProduct = () => {
    Keyboard.dismiss(); // Dismiss the keyboard
    if (!validateForm()) return;

    console.log({
      productName,
      price,
      category: selectedCategory.value,
      images,
    });
    // Add logic to post to backend or Firebase here

    Alert.alert("Success", "Product added successfully!");
  };

  const handleImageUpload = async () => {
    console.log("Image upload button clicked"); // Debugging log

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        allowsMultipleSelection: true, // Allow multiple image selection
      });

      console.log("Image picker result:", result); // Debugging log

      if (!result.canceled) {
        const newImages = result.assets.map((asset) => asset.uri);
        setImages((prevImages) => [...prevImages, ...newImages]);
      } else {
        console.log("User cancelled image picker");
      }
    } catch (error) {
      console.log("ImagePicker Error:", error);
      Alert.alert("ImagePicker Error", error.message);
    }
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.modalItem}
      onPress={() => {
        setSelectedCategory(item);
        setModalVisible(false);
      }}
    >
      <Icon name={item.icon} size={20} color={colors.primary} style={{ marginRight: 10 }} />
      <Text style={styles.modalItemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  const handleCategoryPress = () => {
    Keyboard.dismiss(); // Dismiss the keyboard
    setTimeout(() => {
      setModalVisible(true); // Open modal after a short delay
    }, 100); // Adjust the delay if needed
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // Adjust if needed
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          {/* Image Upload Section */}
          <View style={styles.imageUploadContainer}>
            <TouchableOpacity style={styles.imageUploadButton} onPress={handleImageUpload}>
              <Icon name="plus" size={40} color={colors.primary} />
              <Text style={styles.imageUploadText}>Add Photos</Text>
            </TouchableOpacity>
            <View style={styles.imagePreviewContainer}>
              {images.map((uri, index) => (
                <Image key={index} source={{ uri }} style={styles.imagePreview} />
              ))}
            </View>
          </View>

          <Text style={styles.heading}>Add New Product</Text>

          <TextInput
            style={styles.input}
            placeholder="Product Name"
            value={productName}
            onChangeText={setProductName}
            placeholderTextColor="#777"
          />
          {errors.productName && <Text style={styles.errorText}>{errors.productName}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            placeholderTextColor="#777"
          />
          {errors.price && <Text style={styles.errorText}>{errors.price}</Text>}

          <Text style={styles.label}>Select Category</Text>
          <TouchableOpacity style={styles.categoryPicker} onPress={handleCategoryPress}>
            <Icon name={selectedCategory.icon} size={20} color={colors.primary} style={{ marginRight: 10 }} />
            <Text style={styles.selectedText}>{selectedCategory.label}</Text>
          </TouchableOpacity>

          {/* Modal for category picker */}
          <Modal visible={isModalVisible} transparent animationType="slide">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Choose Category</Text>
                <FlatList
                  data={categories}
                  keyExtractor={(item) => item.value}
                  renderItem={renderCategoryItem}
                />
                <TouchableOpacity
                  style={styles.modalClose}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalCloseText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
            <Text style={styles.buttonText}>Add Product</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    flex: 1,
  },
  imageUploadContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imageUploadButton: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 10,
    borderStyle: "dashed",
  },
  imageUploadText: {
    marginTop: 10,
    color: colors.primary,
    fontSize: 16,
  },
  imagePreviewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  imagePreview: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.black,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: "#000",
    backgroundColor: "#f9f9f9",
  },
  label: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 5,
  },
  categoryPicker: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
  },
  selectedText: {
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "60%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalItemText: {
    fontSize: 16,
  },
  modalClose: {
    marginTop: 15,
    alignItems: "center",
  },
  modalCloseText: {
    fontSize: 16,
    color: colors.secondary,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
});

export default AddProductScreen;