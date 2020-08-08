import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { Archivo_400Regular, Archivo_700Bold, Archivo_600SemiBold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoader] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Archivo_600SemiBold,
  });

  if (!fontsLoader) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}
