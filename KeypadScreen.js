import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';


const KEYPAD = [
  { number: '1', letters: '' },
  { number: '2', letters: 'ABC' },
  { number: '3', letters: 'DEF' },
  { number: '4', letters: 'GHI' },
  { number: '5', letters: 'JKL' },
  { number: '6', letters: 'MNO' },
  { number: '7', letters: 'PQRS' },
  { number: '8', letters: 'TUV' },
  { number: '9', letters: 'WXYZ' },
  { number: '*', letters: '' },
  { number: '0', letters: '+' },
  { number: '#', letters: '' },
];

const KeypadScreen = () => {
  const [input, setInput] = useState('');
  const [sound, setSound] = useState(null); // moved here
  const navigation = useNavigation();

  const playKeySound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/sounds/triangle.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const handlePress = (value) => {
    setInput((prev) => prev + value);
    playKeySound();
  };

  

  const handleCall = () => {
    if (input === '2627') {
      navigation.navigate('Secret');
    } else {
      console.log('Calling', input);
    }
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // ... rest of your code


/*const KeypadScreen = () => {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput((prev) => prev + value);
    playKeySound(); // Play sound on press
  };

  const navigation = useNavigation();
  

  const handleCall = () => {
    if (input === '2627') {
      navigation.navigate('Secret');
    } else {
      console.log('Calling', input);
    }
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  }; */

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Dialed Number Display */}
        {input.length > 0 && (
          <Text style={styles.dialedText}>{input}</Text>
        )}

        {/* Keypad */}
        <View style={styles.keypadGrid}>
          {KEYPAD.map((key) => (
            <TouchableOpacity
              key={key.number}
              style={styles.keypadButton}
              onPress={() => handlePress(key.number)}
            >
              <Text style={styles.keyNumber}>{key.number}</Text>
              {key.letters !== '' && (
                <Text style={styles.keyLetters}>{key.letters}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Call and Backspace Buttons */}
        <View style={styles.callRow}>
          <TouchableOpacity style={styles.callButton} onPress={handleCall}>
            <Ionicons name="call" size={26} color="white" />
          </TouchableOpacity>

          {input.length > 0 && (
            <TouchableOpacity
              style={styles.backspaceButton}
              onPress={handleBackspace}
            >
              <Ionicons name="backspace" size={26} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KeypadScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialedText: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
    color: 'black',
  },
  keypadGrid: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  keypadButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e0e0e0',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  keyLetters: {
    fontSize: 10,
    color: 'black',
    marginTop: 2,
    letterSpacing: 1,
  },
  callRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  callButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#4CD964',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backspaceButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
});

