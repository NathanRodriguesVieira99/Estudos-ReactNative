import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const noticias = [
  {
    title: 'Fim da Grey Day Tour 2024',
    imagem: 'https://d2sa0osf92td39.cloudfront.net/eyJidWNrZXQiOiAiZXZlcm91dC1pbWFnZXMtcHJvZHVjdGlvbiIsICJrZXkiOiAiaW1hZ2UtMTcxMjI0OTI5NTA1NjIxMi1TY3JlZW5zaG90XzIwMjQtMDQtMDRfYXRfOS40Ny4yOF9BTS5wbmciLCAiZWRpdHMiOiB7InJlc2l6ZSI6IHsiZml0IjogImluc2lkZSIsICJwb3NpdGlvbiI6ICJjZW50cmUiLCAid2lkdGgiOiA5NjAsICJoZWlnaHQiOiA2MDB9fX0=',
    desc: 'Após uma sequência de shows históricos ao longo dos Estados Unidos e Europa, a Grey Day Tour 2024 chega ao seu fim...',
  },
  {
    title: 'Soulfly anuncia turnê',
    imagem: 'https://pt.concerts-metal.com/images/flyers/202405/1717052995--Soulfly---Tour-2024.webp',
    desc: 'Soulfy anuncia turnê do álbum Totem pelos EUA.',
  },
  {
    title: 'Sepultura anuncia fim da banda e turnê de despedida em 2024',
    imagem: 'https://veja.abril.com.br/wp-content/uploads/2023/12/Screenshot-2023-12-08-124529.png?quality=70&w=1024&crop=1',
    desc: 'A banda brasileira de heavy-metal, Sepultura, anunciou nesta sexta-feira, 8, que irá se separar',
  },
  {
    title: 'BabyMetal anuncia show solo em São Paulo',
    imagem: 'https://www.radiorock.com.br/wp-content/uploads/2024/09/3-819x1024.jpg',
    desc: 'As garotas do BABYMETAL estarão pela primeira vez no Brasil como atração do festival KNOTFEST no dia 21',
  },
];

export default function Exercicio15() {
  return (
    <>
      <View style={styles.g2Container}>
        <Text style={styles.g2}>g2 notícias</Text>
      </View>
      <ScrollView style={styles.container}>
        {noticias.map((noticia, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{noticia.title}</Text>
            <Image source={{ uri: noticia.imagem }} resizeMode="contain" style={styles.image} />
            <Text style={styles.description}>{noticia.desc}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  g2Container: {
    paddingVertical: 20,
    marginTop: 29,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  g2: {
    fontSize: 32,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 20,
    marginHorizontal: 20,
  },
  card: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
    marginVertical: 5,
  },
});
