import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

const EMAIL_PREDEFINIDO = "usuario@teste.com";
const SENHA_PREDEFINIDA = "123456";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({ email: '', senha: '' });

  const validarEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const verificaLogin = () => {
    const novoErro = { email: '', senha: '' };

    if (!validarEmail(email) || email !== EMAIL_PREDEFINIDO) {
      novoErro.email = 'Por favor, insira um endereço de email válido!';
    }
    if(email === EMAIL_PREDEFINIDO && senha !== SENHA_PREDEFINIDA){
      novoErro.senha = 'Verifique sua senha';
    }
    
    setErros(novoErro);

    if (!novoErro.email && !novoErro.senha && email === EMAIL_PREDEFINIDO && senha === SENHA_PREDEFINIDA) {
      alert('Login realizado com sucesso!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {erros.email ? <Text style={styles.erros}>{erros.email}</Text> : null}
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {erros.senha ? <Text style={styles.erros}>{erros.senha}</Text> : null}
      <Button title="Entrar" onPress={verificaLogin} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
  erros: {
    color: '#FF3B30',
    fontSize: 14,
    paddingBottom: 10,
  },
});
