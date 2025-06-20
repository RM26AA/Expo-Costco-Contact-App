import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import FavouritesScreen from './screens/FavouritesScreen';
import RecentsScreen from './screens/RecentsScreen';
import VoicemailScreen from './screens/VoicemailScreen';
import ContactsScreen from './screens/ContactsScreen';
import KeypadScreen from './screens/KeypadScreen';
import SecretScreen from './screens/SecretScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Keypad"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName;
        switch (route.name) {
          case 'Favourites':
            iconName = 'star';
            break;
          case 'Recents':
            iconName = 'time';
            break;
          case 'Contacts':
            iconName = 'person';
            break;
          case 'Keypad':
            iconName = 'keypad';
            break;
          case 'Voicemail':
            iconName = 'call';
            break;
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Favourites" component={FavouritesScreen} />
    <Tab.Screen name="Recents" component={RecentsScreen} />
    <Tab.Screen name="Contacts" component={ContactsScreen} />
    <Tab.Screen name="Keypad" component={KeypadScreen} />
    <Tab.Screen name="Voicemail" component={VoicemailScreen} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Secret"
          component={SecretScreen}
          options={{
            presentation: 'modal', // full-screen modal with animation
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


