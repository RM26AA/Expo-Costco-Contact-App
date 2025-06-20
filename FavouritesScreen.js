import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const FavouritesScreen = () => {
  const openContactsApp = async () => {
    try {
      await Linking.openURL('content://contacts/people/'); // Android fallback
      // For iOS, no direct Contacts deep link is available via URL schemes; needs workaround
    } catch (error) {
      console.warn('Could not open contacts app:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.title}>Favourites</Text>
        <TouchableOpacity style={styles.plusIcon} onPress={openContactsApp}>
          <Ionicons name="add" size={28} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* Center Message */}
      <View style={styles.centerContent}>
        <Text style={styles.noFavouritesText}>No Favourites</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  plusIcon: {
    position: 'absolute',
    right: 20,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFavouritesText: {
    fontSize: 22,
    color: '#A9A9A9',
  },
});

export default FavouritesScreen;
