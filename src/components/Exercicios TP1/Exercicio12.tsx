import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image } from 'react-native';


const Imagens = [
  {
    url: 'https://m.media-amazon.com/images/I/81gjbVlwL-L.jpg',
    desc: 'Lançado em 2014',
  },
  {
    url: 'https://dw0jruhdg6fis.cloudfront.net/producao/22945933/G/download_1.png',
    desc: 'Lançado em 2018',
  },
  {
    url: 'https://m.media-amazon.com/images/I/81QLxmMiYcL.jpg',
    desc: 'Lançado em 2020'
  },
  {
    url: 'https://m.media-amazon.com/images/I/813f+pzX9bL.jpg',
    desc: 'Lançado em 2013'
  },
  {
    url: 'https://cdn.awsli.com.br/22/22652/produto/232841696/capas--5--tbg0o5krxw.jpg',
    desc: 'Lançado em 2012'
  },
];

export default function Exercicio11() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogos a venda: </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Imagens.map((imagem, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image
              source={{ uri: imagem.url }}
              style={styles.image}
            />
            <Text style={styles.text}>{imagem.desc}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'grey',
  },
  title: {
    marginLeft: 10,
    marginTop: 50,
    fontSize: 35,
    color: "#000"
  },
  itemContainer: {
    width: 200,
    marginTop: 40,
    marginHorizontal: 10,
    alignItems: 'center'
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center'
  }
});
