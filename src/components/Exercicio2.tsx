import { useState } from 'react';
import { View, Text, Alert, Button, StyleSheet, TextInput } from 'react-native';

export default function Exercicio2() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = () => {
    if (user.trim() === '' || password.trim() === '') {
      Alert.alert('Formulário incompleto')
    } else {
      Alert.alert('Sucesso ao se registrar!')

      setUser('');
      setPassword('');
    }
  }



  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerForm}>
          <Text style={styles.title}>Registre-se:</Text>
          <TextInput
            style={styles.input}
            placeholder='usuario:'
            placeholderTextColor={'#000'}
            onChangeText={setUser}
            value={user}
          />
          <TextInput
            style={styles.input}
            placeholder='senha:'
            placeholderTextColor={'#000'}
            onChangeText={setPassword}
            value={password}
          />
          <Button title='Login' onPress={handleSubmit} />
        </View>
      </View>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'semibold'
  },
  input: {
    color: "#000",

    height: 40,
    width: '60%',

    backgroundColor: 'lightgray',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,

    margin: 12,
    padding: 10
  }
})