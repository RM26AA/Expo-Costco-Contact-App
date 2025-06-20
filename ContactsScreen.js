import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const contactsData = [
  {
    title: 'A',
    data: ['Ali Khan', 'Ayesha Bano'],
  },
  {
    title: 'B',
    data: ['Bilal Siddiqi', 'Bushra Akhtar'],
  },
  {
    title: 'F',
    data: ['Farhan Zubair', 'Fatima Shah'],
  },
  {
    title: 'M',
    data: ['Muhammad Zain', 'Mahnoor Tariq'],
  },
  {
    title: 'S',
    data: ['Sameer Qureshi', 'Sara Iqbal'],
  },
  {
    title: 'Z',
    data: ['Zoya Nadeem', 'Zubair Aftab'],
  },
];

const ContactsScreen = () => {
  const renderItem = ({ item }) => {
    const parts = item.split(' ');
    const first = parts[0];
    const last = parts.slice(1).join(' ');
    return (
      <View style={styles.contactRow}>
        <Text style={styles.contactText}>
          {first} <Text style={styles.contactBold}>{last}</Text>
        </Text>
      </View>
    );
  };

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionLine} />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>iCloud</Text>
        <TouchableOpacity>
          <Ionicons name="add" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="gray" />
        <Text style={styles.searchPlaceholder}>Search</Text>
        <Ionicons name="mic" size={18} color="gray" style={{ marginLeft: 'auto' }} />
      </View>

      {/* My Card */}
      <View style={styles.myCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>SM</Text>
        </View>
        <View>
          <Text style={styles.myName}>Sameer Muhammad</Text>
          <Text style={styles.myLabel}>My Card</Text>
        </View>
      </View>

      {/* Contact List */}
      <SectionList
        sections={contactsData}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      {/* Alphabet Scroll (Static) */}
      <View style={styles.alphabetIndex}>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
          <Text key={letter} style={styles.indexLetter}>
            {letter}
          </Text>
        ))}
      </View>
    </View>
    </SafeAreaView>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: 'black',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 36,
    marginVertical: 12,
  },
  searchPlaceholder: {
    color: '#888',
    marginLeft: 8,
    fontSize: 14,
  },
  myCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  myName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  myLabel: {
    fontSize: 12,
    color: '#666',
  },
  sectionHeader: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#888',
  },
  sectionLine: {
    height: 1,
    backgroundColor: '#ddd',
    marginTop: 2,
    marginBottom: 4,
  },
  contactRow: {
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  contactText: {
    fontSize: 16,
    color: '#000',
  },
  contactBold: {
    fontWeight: '600',
  },
  alphabetIndex: {
    position: 'absolute',
    right: 4,
    top: 100,
    alignItems: 'center',
  },
  indexLetter: {
    fontSize: 12,
    color: '#007AFF',
    paddingVertical: 2,
  },
  safeArea: {
  flex: 1,
  backgroundColor: '#fff',
},

});
