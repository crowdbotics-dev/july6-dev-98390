import React from 'react';
import { View, StyleSheet } from 'react-native';

const RedScreen = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});
export default RedScreen;