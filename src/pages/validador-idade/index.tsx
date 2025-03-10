import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Switch } from "react-native";

const ValidadorIdade = () => {
  const [idade, setIdade] = useState('');
  const [mensagem, setMensagem] = useState('');

  const validarIdade = () => {
    if (!idade || isNaN(idade)) {
      setMensagem("Por favor, insira uma idade válida.");
      return;
    }

    const idadeUsuario = parseInt(idade);
    if (idadeUsuario >= 18) {
      setMensagem("Você já pode tirar sua CNH!");
    } else {
      setMensagem("Você ainda não pode tirar sua CNH.");
    }
  };

  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Validador de Idade</Text>
      <TextInput
        style={[styles.input]}
        keyboardType="numeric"
        placeholder="Digite sua idade"
        value={idade}
        onChangeText={setIdade}
      />
      <View style={styles.buttonContainer}>
        <Button title="Validar" onPress={validarIdade} />
      </View>
      {mensagem ? <Text style={[styles.resultado]}>{mensagem}</Text> : null}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
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
    fontWeight: "bold",
  },
});

export default ValidadorIdade;