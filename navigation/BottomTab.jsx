import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ContactsScreen from "../screens/ContactsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import ChatsScreen from "../screens/ChatsScreen";
import OptionScreen from "../screens/OptionScreen";
const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: hp(8),
  },
};
const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Chat"
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Fontisto
                name="hipchat"
                size={focused ? 28 : 26}
                color={focused ? "black" : "#b3b3b3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name="users"
                size={focused ? 30 : 28}
                color={focused ? "black" : "#b3b3b3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Option"
        component={OptionScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <SimpleLineIcons
                name="options"
                size={focused ? 28 : 26}
                color={focused ? "black" : "#b3b3b3"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
