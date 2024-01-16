import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";

const OptionCard = ({ children, option, onPress }) => {
  return (
    <TouchableOpacity
        onPress={onPress}
      style={{ height: hp(6.5) }}
      className="flex-row justify-between items-center"
    >
      <View className="flex-row items-center space-x-2.5">
        {children}
        <Text style={{ fontWeight: "500", fontSize: wp(3.5) }}>{option}</Text>
      </View>
      <Entypo name="chevron-right" size={22} color="black" />
    </TouchableOpacity>
  );
};

export default OptionCard;
