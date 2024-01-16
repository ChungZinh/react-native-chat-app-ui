import { View, Text, SafeAreaView, StatusBar, TextInput } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const SetPasswordScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgWhite }}>
      <StatusBar backgroundColor={COLORS.bgWhite} />
      <View className="px-4">
        <Ionicons name="chevron-back" size={28} color="black" />
      </View>
      <Text
        style={{
          fontSize: wp(6),
          fontFamily: "bold",
          textAlign: "center",
          marginTop: hp(6),
        }}
      >
        Set Your Password
      </Text>

      <View className="items-center justify-center">
        <TextInput
          className="px-4 rounded-md shadow-md shadow-neutral-400"
          style={{
            width: wp(85),
            height: hp(5),
            backgroundColor: "#f3f3f3",
            marginTop: hp(10),
          }}
          placeholder="password"
          // value={phoneNumber}
          // onChangeText={(text) => setPhoneNumber(text)}
        />
        <TextInput
          className="px-4 rounded-md shadow-md shadow-neutral-400"
          style={{
            width: wp(85),
            height: hp(5),
            backgroundColor: "#f3f3f3",
            marginTop: hp(4),
          }}
          placeholder="password"
          // value={phoneNumber}
          // onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>

      <View
        className="justify-center items-center"
        style={{ marginTop: hp(20) }}
      >
        <Button onPress={() => navigation.navigate('SetProfile')}>Continute</Button>
      </View>
    </SafeAreaView>
  );
};

export default SetPasswordScreen;
