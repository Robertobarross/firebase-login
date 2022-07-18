import React from 'react';
import { View, Text } from 'react-native';

const Dashboard = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Dashboard</Text>
  </View>
);

Dashboard.navigationOptions = {
  title: 'Dashboard',
}

export default Dashboard;