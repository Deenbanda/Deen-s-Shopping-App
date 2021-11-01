import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import login from './component/screen/login';
import signup from './component/screen/signup';
import carts from './component/screen/carts';


export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <MainNavigator.Navigator initialRouteName="login" screenOptions={{headerShown: false}}>
          <MainNavigator.Screen name="login" component={login}/>
          <MainNavigator.Screen name="signup" component={signup}/>
          <MainNavigator.Screen name="carts" component={carts}/>
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
