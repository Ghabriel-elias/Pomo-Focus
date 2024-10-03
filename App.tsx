import React, {useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View } from 'react-native';

import {
  useFonts,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_400Regular
} from '@expo-google-fonts/inter'

import theme from './src/global/styles/theme';
import Home from './src/screens/Home'
import Standard from './src/screens/Standard';
import Customize from './src/screens/Customize';
import { propsNavigationStack } from './src/models';


export default function App() {

  const [route, setRoute] = useState('')

  const [pomodoroAsync, setPomodoroAsync] = useState<any>('')
  const [shortAsync, setShortAsync] = useState<any>('')
  const [longAsync, setLongAsync] = useState<any>('')


  useEffect(() => {
    async function Load() {
        const pomodoro = await AsyncStorage.getItem("pomodoro")
        const short =  await AsyncStorage.getItem("shortBreak")
        const long = await AsyncStorage.getItem("longBreak")
         if(pomodoro && short && long){
           setPomodoroAsync(pomodoro)
           setShortAsync(short)
           setLongAsync(long)
           return
         }
     const config = await AsyncStorage.getItem("config")
     if(config === 'standart'){
      setRoute('Standard')
     } 
    }
    Load()
  }, [])

  const Stack = createNativeStackNavigator<propsNavigationStack>()

  const [fontsLoader] = useFonts({
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_400Regular
  })

  if (!fontsLoader) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./src/assets/logo.png')} style={{ width: 300, height: 300 }} />
    </View>
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={
          route === 'Standard' ? 'Standard' : 'Home'
        }>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Standard'
            component={Standard}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Customize'
            component={Customize}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}