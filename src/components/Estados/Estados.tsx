import { View, Text, TextInput, ScrollView, Alert, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'

export default function Estados() {
  const [nome, setNome] = useState('')


  const enviar = () => {
    console.log(nome);
    Alert.alert(`seja bem vindo(a) ${nome}`)
    setNome('')
  }

  return (
    <>
      <View style={styles.container}>
        <Text>  Escreva seu nome: </Text>
        <TextInput
          style={styles.input}
          placeholder='Escreva seu nome'
          value={nome}
          onChangeText={function (valor) { return setNome(valor) }}
        />
        <TouchableHighlight
          onPress={enviar}
          style={styles.button}>
          <Text style={{ color: 'white' }}>  Enviar </Text>
        </TouchableHighlight>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
    color: '#fff',
    padding: 8
  },
  input: {
    margin: 8,
    borderRadius: 5,
    height: 36,
    width: 200,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: '#ddd'
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
    alignItems: 'center'
  }
})
