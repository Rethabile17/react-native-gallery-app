import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const imageItem = ({ uri, timestamp }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri }} style={styles.image} />
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: 5,
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 5,
  },
  image: { width: 150, height: 150, borderRadius: 8 },
  timestamp: { color: "#fff", fontSize: 12, marginTop: 5 },
});

export default imageItem;