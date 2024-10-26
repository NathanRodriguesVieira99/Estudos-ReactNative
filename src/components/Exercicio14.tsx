import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image, Button } from 'react-native';



export default function Exercicio14() {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(prevCount => prevCount + 1);
  }

  const subtrair = () => {
    setCount(prevCount => {
      const subCount = prevCount - 1;


      if (subCount < 0) {
        return 0;
      }
      return subCount;
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 60 }}>
        <Text style={styles.texto}> contagem: {count}</Text>
        <Button
          title='contar'
          onPress={counter}
          color={'green'}
        />
        <Button
          title='subtrair'
          onPress={subtrair}
          color={'red'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  texto: {
    fontSize: 30,
    marginBottom: 20,
  },


});
