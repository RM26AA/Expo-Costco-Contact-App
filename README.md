# 📱 Expo Costco Contact App

This is a fully featured React Native Expo Contact App inspired by the iOS Phone app – with a twist. It includes standard phone tab features (Keypad, Recents, Favourites, Voicemail, Contacts), and a hidden “Secret” tipping screen revealed by entering a special code.

## 🔐 Secret Feature

Enter the secret code 2627 in the keypad and press the call button to reveal a Costco-themed tipping screen, featuring:

- The Costco logo and branding
- Tipping instructions and QR code
- Bank and contact details
- Subtle animations and styling

Great for employees looking for a private way to receive support or tips.

## 🔧 Features

- 📇 Keypad with iOS-style layout & press sound effect
- 🕐 Recents, Favourites, Voicemail, and Contacts tabs
- 📞 Call button with secret screen activation logic
- 🔒 Hidden screen is not part of bottom tab navigation
- 🎨 Secret screen styled with black background, QR code, and smooth animation
- 🔊 Button press audio using expo-av
- 📱 Responsive on various devices (notch-safe, older iPhones supported)

## 📁 Structure

```
/App.js                      # Navigation + Tab structure
/screens/
  ├── KeypadScreen.js        # Main keypad with dial logic and sound
  ├── SecretScreen.js        # Hidden Costco tipping screen
  ├── ContactsScreen.js
  ├── RecentsScreen.js
  ├── FavouritesScreen.js
  ├── VoicemailScreen.js
/assets/
  ├── sounds/triangle.mp3    # Dialpad button sound
  ├── costco-logo.png        # Logo for Secret screen
  ├── qr-code.png            # Employee QR code image
  ├── payment-methods.png    # Accepted payment types
```

## 🛠️ Tech Stack

- Expo
- React Native
- React Navigation
- expo-av for sound effects
- Safe Area Context
- Animated API (LayoutAnimation or Reanimated)

## ▶️ Usage

1. Clone the repo
2. Install dependencies:
```
npm install
```
3. Start project:
```
npx expo start
```
4. Press keys in the keypad, and when you enter 2627 then hit the green call button – 🎉 the secret tipping screen opens!

## ⚠️ Notes

- Make sure audio permissions are handled on first load if testing on real devices.
- The secret screen is not visible in the bottom tab and doesn't interfere with navigation.

## 💡 Future Ideas

- Save tip records
- Add biometric gate to secret screen
- Allow QR generation in-app





















