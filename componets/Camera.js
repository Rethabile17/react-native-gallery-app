import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { launchCamera } from "react-native-image-picker";

const Camera = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);

  const capturePhoto = () => {
    launchCamera({ mediaType: "photo", saveToPhotos: true }, (response) => {
      if (response.assets) {
        const photoData = {
          uri: response.assets[0].uri,
          timestamp: new Date().toLocaleString(),
        };
        setPhoto(photoData);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Capture Photo</Text>
      {photo && (
        <View>
          <Image source={{ uri: photo.uri }} style={styles.image} />
          <Text style={styles.timestamp}>{photo.timestamp}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={capturePhoto}>
        <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Gallery")}
      >
        <Text style={styles.buttonText}>Go to Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
  },
  title: { fontSize: 22, color: "#fff", marginBottom: 20 },
  button: {
    backgroundColor: "#6200EE",
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16 },
  image: { width: 200, height: 200, borderRadius: 8, marginTop: 10 },
  timestamp: { color: "#fff", marginTop: 5 },
});

export default Camera;