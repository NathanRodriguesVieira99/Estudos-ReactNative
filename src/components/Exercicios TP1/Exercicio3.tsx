
import { View, Text, Alert, Button, StyleSheet, TextInput, Image } from 'react-native';

export default function Exercicio3() {



  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://thumbs.dreamstime.com/b/africain-capoeira-rastaman-jouant-un-berimbau-d-instrument-42091602.jpg' }}
          />
        </View>
        <Text style={styles.title}>Berimbau:</Text>
        <Text style={styles.text}>é um instrumento de corda com origem em Angola</Text>
      </View>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'semibold'
  },
  text: {
    marginTop: 10,
    color: "#fff"
  },
  imageContainer: {
    width: "100%",
    height: 400,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 400,
    borderRadius: 10
  }
})