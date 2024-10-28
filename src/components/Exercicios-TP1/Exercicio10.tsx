import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// não sei se ta certo tive que usar um pouco de pesquisa na internet e IA

const ItensCompras = [
  'Bananas',
  'Ovo',
  'Queijo',
  'Coca-Cola',
  'Água'
];

export default function Exercicio10() {
  return (
    <View style={styles.container}>
      <FlatList
        data={ItensCompras}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginTop: 30
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%'
  },
  itemText: {
    fontSize: 18,
  },
});
