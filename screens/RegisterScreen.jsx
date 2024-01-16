import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
const RegisterScreen = () => {
    

    const [phoneNumber, setPhoneNumber] = useState('');
    const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={{flex:1}} >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgWhite }}>
        <StatusBar backgroundColor={COLORS.bgWhite} />
        <View className="px-4">
          <Ionicons name="chevron-back" size={28} color="black" />
        </View>

        <View className="flex-1 items-center justify-center ">
          <View style={{ width: wp(75) }} className="space-y-2">
            <Text style={{ fontSize: wp(6), fontFamily: "bold" }}>
              Enter Your Phone Number
            </Text>
            <Text
              style={{
                fontSize: wp(4),
                fontFamily: "light",
                textAlign: "center",
              }}
            >
              Please confirm your country code and enter your phone number
            </Text>
          </View>

          <TextInput
            keyboardType="numeric"
            className="px-4 rounded-md shadow-md shadow-neutral-400"
            style={{
              width: wp(85),
              height: hp(5),
              backgroundColor: "#f3f3f3",
              marginTop: hp(10),
            }}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>

        <View className="flex-1 items-center justify-center" style={{marginTop: hp(1)}}>
          <Button onPress={() => navigation.navigate('Auth', {phoneNumber})}>Continute</Button>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
