import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Modal,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import sampleCalls from '../sampleCalls'; // adjust path if needed


const RecentsScreen = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [filter, setFilter] = useState('All');

  const filteredCalls = sampleCalls.filter((call) =>
    filter === 'Missed' ? call.isMissed : true
  );



  const renderCallItem = ({ item }) => {
  const hasName = !!item.name;
  const initial = hasName ? item.name[0].toUpperCase() : null;

  return (
    <View style={styles.callItem}>
      {/* Avatar */}
      <View style={styles.avatar}>
        {hasName ? (
          <Text style={styles.avatarText}>{initial}</Text>
        ) : (
          <Ionicons name="person" size={20} color="white" />
        )}
      </View>

      {/* Call Info */}
      <View style={styles.callInfo}>
        <Text style={[styles.callName, item.isMissed && { color: 'red' }]}>
          {item.name || 'Unknown'}
        </Text>
        <Text style={styles.callSub}>{item.location || 'Pakistan'}</Text>
      </View>

      {/* Date & Info icon */}
      <View style={styles.callMeta}>
        <Text style={styles.callDate}>{item.day || 'Yesterday'}</Text>
        <Ionicons name="information-circle-outline" size={20} color="#007AFF" style={styles.infoIcon} />
      </View>

    </View>
  );
};


  return (
  <SafeAreaView style={styles.safeArea}>
    {/* Top Bar */}
    <View style={styles.topBar}>
  <TouchableOpacity onPress={() => setShowMenu(true)} style={styles.editContainer}>
    <Text style={styles.editText}>Edit</Text>
  </TouchableOpacity>

  <View style={styles.toggleWrapper}>
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={[
          styles.toggleOption,
          filter === 'All' && styles.toggleActive,
        ]}
        onPress={() => setFilter('All')}
      >
        <Text style={styles.toggleText}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.toggleOption,
          filter === 'Missed' && styles.toggleActive,
        ]}
        onPress={() => setFilter('Missed')}
      >
        <Text style={styles.toggleText}>Missed</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>


    {/* Modal Menu */}
    <Modal transparent visible={showMenu} animationType="fade">
      <TouchableOpacity
        style={styles.modalOverlay}
        onPress={() => setShowMenu(false)}
      >
        <View style={styles.menuBox}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => setShowMenu(false)}
          >
            <MaterialIcons name="person" size={18} color="gray" />
            <Text style={styles.menuText}>Set Up Name & Photo</Text>
          </TouchableOpacity>
          <View style={styles.menuDivider} />
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => setShowMenu(false)}
          >
            <Text style={styles.menuText}>Select</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>

    {/* Title */}
    <Text style={styles.title}>Recents</Text>

    {/* Search Bar */}
    <View style={styles.searchBar}>
      <Ionicons name="search" size={18} color="gray" />
      <Text style={styles.searchPlaceholder}>Search</Text>
      <Ionicons name="mic" size={18} color="gray" style={{ marginLeft: 'auto' }} />
    </View>

    {/* Call List */}
    <FlatList
      data={filteredCalls}
      renderItem={renderCallItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 40 }}
    />
  </SafeAreaView>
);
};


const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, backgroundColor: '#fff' },
  topBar: {
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
  },

  editText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '400',
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#dcdcdc',
    borderWidth: 1,             // thin outline
    borderColor: 'grey',       // black outline
    borderRadius: 8,
    overflow: 'hidden',
  },
  toggleOption: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  toggleActive: {
    backgroundColor: '#fff',
  },
  toggleText: {
    fontSize: 14,
    color: 'black',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    marginVertical: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 36,
    marginBottom: 10,
  },
  searchPlaceholder: {
    color: '#888',
    marginLeft: 8,
    fontSize: 14,
  },
  callItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: 'white',
    fontWeight: '600',
  },
  callInfo: {
    flex: 1,
  },
  callName: {
    fontSize: 16,
    color: 'black',
  },
  callSub: {
    fontSize: 12,
    color: '#666',
  },
  callDate: {
    fontSize: 12,
    color: 'gray',
    marginRight: 8,
  },
  infoIcon: {
    paddingHorizontal: 2,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingTop: 60,
    paddingLeft: 10,
  },
  menuBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 6,
    width: 220,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 6,
  },
  menuText: {
    fontSize: 14,
    color: '#333',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  safeArea: {
  flex: 1,
  paddingHorizontal: 16,
  backgroundColor: '#fff',
},
callSub: {
  fontSize: 12,
  color: '#666',
  marginTop: 2,
},
callMeta: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 6, // optional for spacing, or use marginRight/marginLeft instead
},
editContainer: {
  position: 'absolute',
  left: 0,
  top: 0,
  padding: 4,
},

toggleWrapper: {
  alignItems: 'center',
},




});

export default RecentsScreen;






