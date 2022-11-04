import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TheoryAssignment2 from './Components/TheoryAssignment2 ';

export default function App() {
  return (
    <View style={styles.container}>
      
      <TheoryAssignment2 />
   
      <StatusBar style="auto" />
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
}
);
