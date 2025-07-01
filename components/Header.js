import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> Welcome Mukesh</Text>
      <Text style={styles.subtitle}>React Native Journey Begins</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4682B4',
    paddingVertical: 25,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#F8F8FF',
    fontSize: 16,
    marginTop: 5,
  },
});
