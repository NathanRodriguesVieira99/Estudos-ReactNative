import { View, Text, Alert, Button, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';




export default function App() {

  const alertI = () => {
    Alert.alert('zumbi é o senhor das guerras')
  }
  const alertII = () => {
    Alert.alert('zumbi é o senhor das demandas')
  }
  const alertIII = () => {
    Alert.alert('quando zumbi chega, é zumbi quem manda')
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.botao1} onPress={alertI}>
          <Text style={styles.buttonText}>Botão 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao2} onPress={ alertII}>
          <Text style={styles.buttonText}>Botão 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao3} onPress={ alertIII}>
          <Text style={styles.buttonText}>Botão 3 </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  botao1: {
    width: 100,
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  botao2: {
    width: 200,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  botao3: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
});