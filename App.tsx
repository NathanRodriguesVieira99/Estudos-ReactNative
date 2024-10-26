import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, ScrollView, Image, Button } from 'react-native';

const cores = [
  'red',
  'green',
  'yellow',
  'purple',
  'pink',
  'orange',
  'lightsteelblue'
]

export default function App() {
  const [corDeFundo, setCorDeFundo] = useState('white')

  const changeColor = () => {
    const randomColor = cores[Math.floor(Math.random() * cores.length)]
    setCorDeFundo(randomColor)
  }


  return (
    <View style={[styles.container, { backgroundColor: corDeFundo }]}>
      <Pressable
        onPress={changeColor}
        style={styles.botao}
      >
        <Text style={styles.texto}> Mudar a cor </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    padding: 20,
    backgroundColor: 'lightgray',
    borderRadius: 5
  },
  texto: {
    fontSize: 18,
    color: '#000'
  }
});
