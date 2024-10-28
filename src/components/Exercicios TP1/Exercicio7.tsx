import React from 'react';
import { View, Text, Alert, Button, StyleSheet } from 'react-native';

export default function App() {
  const alertI = () => {
    Alert.alert('la ele');
  };
  
  const alertII = () => {
    Alert.alert('bora bill');
  };
  
  const alertIII = () => {
    Alert.alert('receba');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Botão 1" onPress={alertI} color="green" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Botão 2" onPress={alertII} color="blue" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Botão 3 (Largura total)" onPress={alertIII} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  buttonContainer: {
    width: '100%', 
    marginBottom: 10,
  },
});
