import { View, Text, Alert, Button, StyleSheet, TextInput, Image, ScrollView } from 'react-native';


const itens = [
  'Xbox',
  'Playstation',
  'Assassins Creed Mirage',
  'Grand Theft Auto V',
  'For Honor'
]

export default function Exercicio4() {



  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.textContainer}>
          {itens.map((item, index) => (
            <Text key={index} style={styles.text}>
              {item}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
  },
  ScrollView: {
    padding: 20,
  },
  textContainer: {
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    margin: 12
  }
})