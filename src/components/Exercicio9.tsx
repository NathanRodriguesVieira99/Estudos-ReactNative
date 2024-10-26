import { View, Text, Alert, Button, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';




export default function Exercicio9() {



  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.image}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcpvwgE1mdvU3Rew80M1FeU3HbBHsamRDthpiwH2-RHEPJTseEPscHaqV5dILXO8VbCk&usqp=CAU' }}
        />
        <Text style={styles.name}>Nathan Rodrigues</Text>
        <Text style={styles.bio}>Estudante de EDS no Infnet que está aprendendo React Native e TypeScript</Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20
  },
  bio: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'semibold',
    marginTop: 20,
    textAlign: 'center'
  }

});