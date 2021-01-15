import React from 'react';
import { StyleSheet, View } from 'react-native';
import KittenCard from '../components/KittenCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <KittenCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
