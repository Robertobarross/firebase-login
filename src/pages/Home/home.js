import React from 'react';
import { View, Text } from 'react-native-web';
import styles from '../Home/style';

const Home = ({ navigation }) => (
  <View style={styles.home}>
    <Text style={styles.homeText}>Bem vindo!</Text>

    <Text
      style={styles.loginText}
      onPress={() => navigation.navigate('Login')}>
      LOGIN
    </Text> 

    <Text
      style={styles.loginText}
      onPress={() => navigation.navigate('Cadastro')}>
      CADASTRO
    </Text> 
  </View>
);

Home.navigationOptions = {
  title: 'Home',
}

export default Home;