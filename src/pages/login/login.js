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


/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#313131',
        marginTop: 10,
        width: '80%',
        height: 50
    }
})
*/








/*
import React from 'react';
import { View, Button, Text } from 'react-native';

const Login = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Login</Text>
  </View>
);

Login.navigationOptions = {
  title: 'Login',
}

export default Login;
*/



/*
import React from 'react';
import { View, Text } from 'react-native-web';
import styles from './style'; 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Login(){
  return(
      <View>
          <Text>Login</Text>
      </View>
  );
}
*/
  

/*
import React from "react";
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
          />
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} 
          options={{ title: 'Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
*/