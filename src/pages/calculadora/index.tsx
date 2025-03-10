import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Switch} from 'react-native';


const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState<number | null | string>(null);

  const mudarOp = (operacao: string) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)){
      setResultado('Por favor, insira números');
      return
    };

    if (operacao === 'somar') {
      setResultado(n1 + n2);
    } else if (operacao === 'subtrair') {
      setResultado(n1 - n2);
      
    }
  };

  return (
    //<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container]}>

        <Text style={styles.title}>Calculadora</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite o primeiro número"
          value={num1}
          onChangeText={setNum1}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite o segundo número"
          value={num2}
          onChangeText={setNum2}
        />

        <View style={styles.buttonContainer}>
          <Button title="Somar" onPress={() => mudarOp('somar')} />
          <Button title="Subtrair" onPress={() => mudarOp('subtrair')} />
        </View>

        {resultado !== null && <Text style={styles.resultado}>{resultado}</Text>}
      </View>
    //</TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "40%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 8, 
    marginBottom: 10,
    fontSize: 16, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%',
    marginTop: 10,
  },
  resultado: {
    fontSize: 22,
    marginTop: 20,
  },
  });

export default App;