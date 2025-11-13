import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,
 Button, SafeAreaView, FlatList
} from 'react-native';

export default function App() {
const [nombre, setNombre]=useState('');
const [productos, setProductos]=useState([]);
const [cantidad, setCantidad]=useState('');
const showInput= ()=>{
	if(nombre.trim()==='')return;
	const nuevo={
		id: Date.now().toString(), nombre, cantidad
	};
	setProductos([...productos, nuevo]);
	setNombre=('');
	setCantidad=('');
};
  return (
  <SafeAreaView style={styles.container}>
  
    <Text>hola </Text>  
    
    <Text>Escribe tu nombre</Text>
    	<TextInput style={styles.input}
	 placeholder='Escribe tu nombre aqui'
	 onChangeText={(texto)=> setNombre(texto)} />
	 <Button title='Presiona aqui' onPress={showInput}
	 ></Button>
   
    <FlatList
      data={productos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text>{item.nombre} - {item.cantidad}</Text>
      )}
    />
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

