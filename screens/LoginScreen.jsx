import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../constants/colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const navigation = useNavigation();
  const [secret, setSecret] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgWhite }}>
      <StatusBar backgroundColor={COLORS.bgWhite} />
      <View className="items-center flex-1">
        <Image
          style={{ width: wp(90), height: hp(30), resizeMode: "contain" }}
          source={require("../assets/images/creator.png")}
        />
      </View>

      <View style={{ flex: 2 }}>
        <View className="px-4">
          <Text
            style={{ fontSize: wp(5.5), fontFamily: "bold", marginTop: hp(8) }}
          >
            Login
          </Text>

          <View style={{ marginTop: hp(4) }}>
            <View className="flex-row items-center space-x-4 ">
              <Feather name="phone" size={20} color="black" />
              <TextInput
                className="border-b-0.5 py-2.5 border-neutral-300"
                placeholder="phone"
                placeholderTextColor={"#b3b3b3"}
                style={{ width: wp(80) }}
              />
            </View>
            <View className="flex-row items-center space-x-4  mt-6 ">
              <Feather name="lock" size={20} color="black" />
              <View className="flex-row items-center">
                <TextInput
                  className="border-b-0.5 py-2.5 border-neutral-300"
                  style={{ width: wp(80) }}
                  placeholder="password"
                  placeholderTextColor={"#b3b3b3"}
                  secureTextEntry={secret}
                />
                <Pressable
                  onPress={() => setSecret(!secret)}
                  className="absolute right-0"
                >
                  {secret ? (
                    <Ionicons name="eye-off-outline" size={24} color="black" />
                  ) : (
                    <Ionicons name="eye-outline" size={24} color="black" />
                  )}
                </Pressable>
              </View>
            </View>
            <Pressable className="self-end mt-4">
              <Text style={{ fontSize: wp(3), color: COLORS.primary }}>
                Forgot password?
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          className="justify-center items-center space-y-4"
          style={{ marginTop: hp(10) }}
        >
          <Button>Continute</Button>

          <View className="flex-row space-x-1">
            <Text>Joined us before?</Text>
            <Text
              onPress={() => navigation.navigate("Register")}
              style={{ color: COLORS.primary }}
            >
              Sign up
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
