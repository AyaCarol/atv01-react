import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App(){
    return(
        <View style={[styles.container]}>
              <Text style={[styles.title]}>Este é o App da nossa equipe :)</Text>
              <Text style={[styles.subtitle]}>Nós somos:</Text>
              <Text style={[styles.paragrafo]}>Ana Carolina Gomes da Silva</Text>
              <Text style={[styles.paragrafo]}>Emily Grzgorczyki</Text>
              <Text style={[styles.paragrafo]}>Ricardo Ortiz</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    paragrafo: {
        fontSize: 16,
    },
});