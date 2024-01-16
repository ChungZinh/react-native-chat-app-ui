import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AuthScreen from "../screens/AuthScreen";
import SetPasswordScreen from "../screens/SetPasswordScreen";
import SetProfileScreen from "../screens/SetProfileScreen";
import BottomTab from "./BottomTab";
import ChatDetailScreen from "../screens/ChatDetailScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome"  component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="SetPassword" component={SetPasswordScreen} />
        <Stack.Screen name="SetProfile" component={SetProfileScreen} />
        <Stack.Screen name="Main" component={BottomTab} />
        <Stack.Screen name="ChatD" component={ChatDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
