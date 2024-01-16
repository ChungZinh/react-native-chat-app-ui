import { View, Text, SafeAreaView, Image, StatusBar } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Button from "../components/Button";
import {useNavigation} from "@react-navigation/native";
const WelcomeScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgWhite }}>
      <StatusBar backgroundColor={COLORS.bgWhite}/>
      <View className="flex-1 justify-end items-center mb-10">
        <Image source={require("../assets/images/img.png")} />
      </View>

      <View className="flex-1 items-center">
        <Text
          style={{
            flex: 1,
            fontFamily: "bold",
            fontSize: wp(6),
            width: wp(70),
            textAlign: "center",
          }}
        >
          Connect easily with your family and friends over countries
        </Text>

        <View style={{ flex: 1 }} className="justify-end mb-12">
          <Text className='text-center mb-6'>Term & Privacy Policy</Text>
          <Button onPress={() => navigation.navigate('Login')}>Start Messaging</Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
