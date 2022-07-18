import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import styles from '../login/style';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../components/firebase';
  
export function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
      await signInWithEmailAndPassword(auth, email, password)
      .then(value => {
        navigation.navigate('Dashboard')
          console.log('Logado com sucesso! \n' + value.user.uid.email);
          {
            alert('Logado com sucesso, bem vindo!');
          }
      })
      .catch(error => console.log(error));
  };

     async function logout() {
      await signOut(auth)
      .then(() => {
        console.log('Sessão encerrada!');
      })
      .catch(error => console.log(error));
     }

    return (
        <View style={styles.container}>
            <Text>LOGIN</Text>
            <TextInput 
              placeholder="Email"
              placeholderTextColor="#313131"
              value={email}
              onChangeText={value => setEmail(value)}
              style={styles.input}
            />
            <TextInput 
              placeholder="Senha"
              placeholderTextColor="#313131"
              value={password}
              onChangeText={value => setPassword(value)}
              style={styles.input}
            />

            <Button 
              title="ENTRAR"
              onPress={() => login('')}
            />

            <Button 
              title="SAIR"
              onPress={() => logout()}
            />

            <Text 
              style={styles.loginText}
              onPress={() => navigation.navigate('Cadastro')}>
              Não tem cadastro? Click aqui para cadastrar-se
            </Text> 
        </View>
    )
}