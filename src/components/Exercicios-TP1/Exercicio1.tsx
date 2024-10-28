import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Exercicio1() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewText}>
          <Text style={styles.text}>Bem-vindos ao meu TP1</Text>
        </View>
      </View>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewText: {
    flex: 1,
    backgroundColor: 'darkslategray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: "bold"
  }
})