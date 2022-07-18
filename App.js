import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home/home';
import { Login } from './src/pages/login/login';
import { Cadastro } from './src/pages/cadastro/cadastro';
import Dashboard from './src/pages/dashboard/dashboard';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#008080',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home' }}
      /> 

      <Stack.Screen 
        name="Login" 
        component={Login}
        options={{ title: 'Login' }}
      /> 

      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro} 
        options={{ title: 'Cadastro'}}
      /> 

      <Stack.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{ title: 'Dashboard'}}
      /> 
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



/*

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{ title: 'Home' }}
        />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

*/



/*
import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./src/pages/login/style";
import Home from "./src/pages/Home/home";

export default function App() {
  return (
    <View style={styles.login}>
      <Home />
    </View>
  );
}
*/

