import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, Button, Alert } from 'react-native';



export default function App() {
  const [feedback, setFeedback] = useState('')


  const handleSendFeedback = () => {
    if (feedback.trim()) {
      Alert.alert("Feedback enviado!", "Obrigado pelo seu feedback.")
      setFeedback('')
    } else {
      Alert.alert("Aviso", "O campo de feedback está vazio.")
    }
  }


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Deixe seu Feedback</Text>
        <TextInput
          style={styles.input}
          multiline
          value={feedback}
          onChangeText={setFeedback}
          placeholder='Escreva seu feedback'
          scrollEnabled
        />
        <Button title='Enviar Feedback' onPress={handleSendFeedback}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: "#fff"
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: " #333"
  },
  input: {
    height: 120,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    textAlignVertical: 'top',
    color: "#333"
  }
});
