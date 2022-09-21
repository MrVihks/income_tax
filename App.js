import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/pages/HomeScreen/';
import TableScreen from './src/pages/TableScreen';
import WhatScreen from './src/pages/WhatScreen';
import UsesScreen from './src/pages/UsesScreen';
import HowScreen from './src/pages/HowScreen';
import AboutUsScreen from './src/pages/AboutUsScreen';
import CalculatorScreen from './src/pages/CalculatorScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Início", headerTitleAlign: 'center'}} />
        <Stack.Screen name="Table" component={TableScreen} options={{title:"Tabela", headerTitleAlign: 'center'}}/>
        <Stack.Screen name="What" component={WhatScreen} options={{title:"O que é ?", headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Uses" component={UsesScreen} options={{title:"Para que serve ?", headerTitleAlign: 'center'}} />
        <Stack.Screen name="How" component={HowScreen} options={{title:"Como calcular ?", headerTitleAlign: 'center'}}/>
        <Stack.Screen name="AboutUs" component={AboutUsScreen} options={{title:"Sobre nós", headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Calculator" component={CalculatorScreen} options={{title:"Calculadora", headerTitleAlign: 'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
