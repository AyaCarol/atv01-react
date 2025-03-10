import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from "react-native";

export default function UserInfoForm() {
  const [formulario, setFormulario] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    endereco: "",
    idade: "",
  });
  const [dados, setDados] = useState(null);

  const handleChange = (key : string, value : string) => {
    setFormulario({ ...formulario, [key]: value });
  };

  const handleSubmit = () => {
    const { nome, cpf, email } = formulario;
    if (!nome || !cpf || !email) {
      alert("Os campos Nome, CPF e Email são obrigatórios.");
      return;
    }
    setDados(formulario);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>


      <Text style={styles.title}>Formulário</Text>
      
      <Text style={styles.label}>Nome *</Text>
      <TextInput style={styles.input} placeholder="Nome" onChangeText={(text) => handleChange("nome", text)} />
      
      <Text style={styles.label}>CPF *</Text>
      <TextInput style={styles.input} placeholder="CPF" keyboardType="numeric" onChangeText={(text) => handleChange("cpf", text)} />
      
      <Text style={styles.label}>Email *</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={(text) => handleChange("email", text)} />
      
      <Text style={styles.label}>Telefone</Text>
      <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" onChangeText={(text) => handleChange("telefone", text)} />
      
      <Text style={styles.label}>Endereço</Text>
      <TextInput style={styles.input} placeholder="Endereço" onChangeText={(text) => handleChange("endereco", text)} />
      
      <Text style={styles.label}>Idade</Text>
      <TextInput style={styles.input} placeholder="Idade" keyboardType="numeric" onChangeText={(text) => handleChange("idade", text)} />
      
    
      <Button title="Enviar" onPress={handleSubmit}/>
      
      {dados && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Informações do Usuário:</Text>
          <Text>Nome: {dados.nome}</Text>
          <Text>CPF: {dados.cpf}</Text>
          <Text>Email: {dados.email}</Text>
          {dados.telefone ? <Text>Telefone: {dados.telefone}</Text> : null}
          {dados.endereco ? <Text>Endereço: {dados.endereco}</Text> : null}
          {dados.idade ? <Text>Idade: {dados.idade}</Text> : null}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
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
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
