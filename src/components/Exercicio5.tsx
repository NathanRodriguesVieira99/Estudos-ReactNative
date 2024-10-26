
import { View, Text, Alert, Button, StyleSheet, TextInput, Image } from 'react-native';

export default function Exercicio5() {



  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://i.redd.it/scrim-is-5-years-sober-today-v0-uv4z99pfokjc1.jpg?width=814&format=pjpg&auto=webp&s=cb232220ec9cdd7a0a81d7578bd0e46bef89c43d' }}
          />
        </View>
        <Text style={styles.title}>El Wetto</Text>
        <Text style={styles.text}>Member of $uicideBoy$</Text>
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
    borderRadius: 100
  }
})