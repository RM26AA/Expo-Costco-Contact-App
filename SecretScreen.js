import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const SecretScreen = () => {
  const navigation = useNavigation();

  const handleViewMore = () => {
    Linking.openURL('https://larry12334.github.io/Costco/'); // Replace with your actual link
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/costco6.png')} // Replace with your logo path
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Tipping Service</Text>

      <Image
        source={require('../assets/frame2.png')} // Replace with your QR code image path
        style={styles.qr}
        resizeMode="contain"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleViewMore}>
          <Text style={styles.buttonText}>View More</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.backButton]} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SecretScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 60,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'System',
    marginBottom: 30,
  },
  qr: {
    width: 250,
    height: 250,
    marginBottom: 40,
  },
  buttonContainer: {
    alignItems: 'center',
    gap: 16, // Use marginBottom on individual buttons if this doesn't work in your React Native version
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'System',
  },
});

