import React {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
const [nombre, setNombre]=useState('');
  return (
  <>
  
    <View style={styles.container}><Text>hola {nombre}
    </Text>  <StatusBar style="auto" />
    </View>
    <View style={styles.p}><Text>Soy duvan</Text
    ><StatusBar style="auto"/>   
	<TextInput style={styles.input}
	 placeholder='Escribe tu nombre aqui'
	 onChangeText={(texto)=> setNombre(texto)} />
	 <Button>Presiona aqui</Button>
    </View>
    
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  p:{
  	backgroundColor: '#ccc',
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  input: {
      borderWidth: 1,
      borderColor: '#888',
      padding: 10,
      width: 200,
      marginBottom: 10,
      borderRadius: 5,
    },
});
