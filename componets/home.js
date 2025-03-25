import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery App</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Camera")}
      >
        <Text style={styles.buttonText}>Take a Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Gallery")}
      >
        <Text style={styles.buttonText}>View Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#031c06",
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 20 },
  button: {
    backgroundColor: "#70ff63",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default home;