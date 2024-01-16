import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../constants/colors";
const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="rounded-full shadow-md shadow-neutral-600 justify-center"
      style={{
        width: wp(85),
        height: hp(6),
        backgroundColor: COLORS.primary,
      }}
    >
      <Text
        className="text-center text-white"
        style={{ fontFamily: "light", fontSize: wp(5) }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
