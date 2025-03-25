import React from 'react';
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker'; 
const footer = ({ onPressUpload, onPressCamera, onPressGallery, onPressSettings }) => {
  
 
  const handleUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Media library access is required.');
      return;
    }

    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, 
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets);
      
    } else {
      Alert.alert('No media', 'You did not select any media.');
    }
  };

  return (
    <View style={styles.footer}>
    <TouchableOpacity onPress={onPressGallery}>
          <Icon name="images-outline" size={50} color="grey" />
        </TouchableOpacity>
  
        <TouchableOpacity onPress={onPressSettings}>
          <Icon name="settings-outline" size={50} color="grey" />
        </TouchableOpacity>
  
        <TouchableOpacity onPress={onPressCamera}>
        <Icon name="camera-outline" size={50} color="grey" />
      </TouchableOpacity>
  
        <TouchableOpacity onPress={handleUpload}>
          <Icon name="cloud-upload-outline" size={50} color="grey" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
  },
});

export default footer;