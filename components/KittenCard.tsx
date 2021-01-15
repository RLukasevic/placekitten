import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://placekitten.com/600/600'}} />
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
  image: {
    width: 250,
    height: 200,
  },
});
