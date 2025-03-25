import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import ImageItem from "../components/ImageItem";

const Gallery = () => {
  const [images, setImages] = useState([]);

  const uploadPhoto = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (response.assets) {
        setImages([
          ...images,
          { uri: response.assets[0].uri, timestamp: "Uploaded" },
        ]);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <TouchableOpacity style={styles.button} onPress={uploadPhoto}>
        <Text style={styles.buttonText}>Upload Photo</Text>
      </TouchableOpacity>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <ImageItem uri={item.uri} timestamp={item.timestamp} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1E1E1E", padding: 10 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16 },
});

export default Gallery;