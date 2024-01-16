import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { loadAsync } from "expo-font";
import StackNavigator from "./navigation/StackNavigator";
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
      async function LoadFonts() {
        try {
          await loadAsync({
            'bold': require('./assets/fonts/Roboto-Bold.ttf'),
            'light': require('./assets/fonts/Roboto-Light.ttf'),
            'black': require('./assets/fonts/Roboto-Black.ttf'),
            'italic': require('./assets/fonts/Roboto-Italic.ttf'),
            'regular': require('./assets/fonts/Roboto-Regular.ttf'),
            'thin': require('./assets/fonts/Roboto-Thin.ttf'),
          });
          setFontsLoaded(true);
        } catch (error) {
          console.log(error);
        }
      }
      LoadFonts();
  },[])

  if(!fontsLoaded){
    return null;
  }
  return (
    <>
      <StackNavigator/>
    </>
  );
}
