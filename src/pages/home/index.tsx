import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App(){
    return(
        <View style={[styles.container]}>
              <Text style={[styles.title]}>Este é o App da nossa equipe :)</Text>
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
});