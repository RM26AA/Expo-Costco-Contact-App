import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Linking,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const VoicemailScreen = () => {
  const [showGreetingMenu, setShowGreetingMenu] = useState(false);
  const [greetingType, setGreetingType] = useState('Default');

  const openContacts = () => {
    Linking.openURL('content://contacts/people'); // iOS users will fallback to native
  };

  const handleGreetingSelect = (type) => {
    setGreetingType(type);
    setShowGreetingMenu(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Voicemail</Text>
        <TouchableOpacity onPress={() => setShowGreetingMenu(true)} style={styles.greetingBtn}>
          <Text style={styles.greetingText}>Greeting</Text>
        </TouchableOpacity>
      </View>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Voicemail Provider */}
      <View style={styles.voicemailBox}>
        <View style={styles.leftSection}>
          <View style={styles.blueDot} />
          <Text style={styles.providerText}>Network Provider Voicemail</Text>
        </View>
        <TouchableOpacity style={styles.callButton} onPress={openContacts}>
          <Text style={styles.callText}>Call</Text>
        </TouchableOpacity>
      </View>

      {/* Greeting Menu Modal */}
      <Modal transparent visible={showGreetingMenu} animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setShowGreetingMenu(false)}
          activeOpacity={1}
        >
          <View style={styles.menuBox}>
            {['Default', 'Custom'].map((type, index) => (
              <React.Fragment key={type}>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleGreetingSelect(type)}
                >
                  <Text style={styles.menuText}>{type}</Text>
                  {greetingType === type && (
                    <Ionicons name="checkmark" size={16} color="#007AFF" />
                  )}
                </TouchableOpacity>
                {index === 0 && <View style={styles.menuDivider} />}
              </React.Fragment>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default VoicemailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    position: 'relative',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  greetingBtn: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 4,
  },
  greetingText: {
    fontSize: 14,
    color: '#007AFF',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 12,
    marginBottom: 8,
  },
  voicemailBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blueDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
    marginRight: 8,
  },
  providerText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  callButton: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 18,
  },
  callText: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 60,
    paddingRight: 10,
  },
  menuBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 180,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuText: {
    fontSize: 14,
    color: '#333',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 8,
  },
});
