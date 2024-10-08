import { FirebaseError } from "firebase/app";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from "react-native";
import { firestore } from "../firebase";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function dados(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    function logar() {
        Firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(() => {
                if (!user) {
                    alert('Usuário não existe.');
                    return;
                }
                navigation.navigate('Rotas', { email });
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Login</Text>
            <TextInput
                style={estilo.input}
                placeholder="Digite o email"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={estilo.input}
                placeholder="Digite a senha"
                placeholderTextColor="#aaa"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <TouchableOpacity style={estilo.botaoLogar} onPress={logar}>
                <Text style={estilo.textoBotaoLogar}>Logar</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#116611',
        padding: 20,
    },
    titulo: {
        fontSize: 50,
        color: '#fff',
        marginBottom: 40,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
    },
    botaoLogar: {
        width: '100%',
        height: 50,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotaoLogar: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
