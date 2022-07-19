import React, { useState } from "react";
import { View, Text, TextInput } from 'react-native';
import styles from "../cadastro/style";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../components/firebase';
import { Button } from "react-native-elements";

export function Cadastro({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)     
        .then(value => {
            console.log('Cadastrado com sucesso! \n' + value.user.uid.email);
            {
              alert('Cadastro criado com sucesso');
            }
          })
        .catch(error => console.log(error));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.cadastroText}>FAZER CADASTRO</Text>
            <TextInput 
              placeholder="email"
              placeholderTextColor="#313131"
              value={email}
              onChangeText={value => setEmail(value)}
              style={styles.input}
            />
            <TextInput 
              placeholder="cadastre senha com 6 carecteres"
              placeholderTextColor="#313131"
              value={password}
              onChangeText={value => setPassword(value)}
              style={styles.input}
              maxLength={6}
              secureTextEntry={true}
            />

            <Button
              buttonStyle={styles.button} 
              title="CADASTRAR"
              onPress={() => createUser()}
            />

            <Text 
              style={styles.loginText}
              onPress={() => navigation.navigate('Login')}>
              Fez o cadastro? Click aqui para logar
            </Text> 
        </View>
    )
}