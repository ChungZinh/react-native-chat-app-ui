import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Pressable,
  TextInput,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { COLORS } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
const AuthScreen = ({ route }) => {
  const navigation = useNavigation();

  const [otp, setOTP] = useState("");
  const inputRefs = Array(6)
    .fill(0)
    .map((_, i) => useRef(null));

  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

  const handleInputChange = (value, index) => {
    // Validate input (you can add your validation logic here)
    setOTP((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    // Auto-focus to the next TextInput when a digit is entered
    if (index < 5 && value !== "") {
      inputRefs[index + 1].current.focus();
    }
  };

  // const handleSubmit = () => {
  //   // Handle OTP submission logic here
  //   console.log('Submitted OTP:', otp.join(''));
  // };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgWhite }}>
      <StatusBar backgroundColor={COLORS.bgWhite} />
      <View className="px-4">
        <Ionicons name="chevron-back" size={28} color="black" />
      </View>

      <View
        className="justify-center items-center"
        style={{ marginTop: hp(12) }}
      >
        <View style={{ width: wp(75) }} className="space-y-2">
          <Text
            style={{ fontSize: wp(6), fontFamily: "bold", textAlign: "center" }}
          >
            Enter Code
          </Text>
          <Text
            style={{
              fontSize: wp(4),
              fontFamily: "light",
              textAlign: "center",
            }}
          >
            {`We have sent you an SMS with the code to +84 ${route.params.phoneNumber}`}
          </Text>
        </View>

        <View
          className="items-center justify-center"
          style={{ marginTop: hp(6) }}
        >
          {/* <View
            className="flex-row items-center justify-between"
            style={{ width: wp(70) }}
          >
            {code.map((item, index) => {
              return (
                <View
                  className="shadow-md shadow-neutral-200 justify-center items-center"
                  key={index}
                  style={{
                    width: wp(10),
                    height: wp(14),
                    borderRadius: wp(2),
                    backgroundColor: "#f3f3f3",
                  }}
                >
                  <Text style={{ fontSize: wp(8) }}>{item}</Text>
                </View>
              );
            })}
          </View> */}
          <View className="flex-row space-x-3">
            {inputRefs.map((ref, index) => (
              <TextInput
                key={index}
                ref={ref}
                style={{
                  height: 50,
                  width: 50,
                  borderWidth: 1,
                  borderRadius: 5,
                  textAlign: "center",
                  fontSize: wp(6),
                  fontFamily: "bold",
                  borderColor: "#c3c3c3",
                }}
                className=""
                maxLength={1}
                keyboardType="numeric"
                value={otp[index]}
                onChangeText={(value) => handleInputChange(value, index)}
              />
            ))}
          </View>

          <Pressable style={{ marginTop: hp(10) }}>
            <Text style={{ color: COLORS.primary, fontFamily: "regular" }}>
              Resend Code
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        className="absolute bottom-12 items-center justify-center"
        style={{ width: wp(100) }}
      >
        <Button onPress={() => navigation.navigate("SetPassword")}>
          Continute
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
