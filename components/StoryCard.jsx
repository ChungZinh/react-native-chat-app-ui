import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../constants/colors";
const StoryCard = ({ item }) => {
  return (
    <View className='items-center space-y-2'>
      <TouchableOpacity
        style={{ width: wp(15), height: wp(15), borderColor: COLORS.primary }}
        className="mx-2 border-2 rounded-2xl justify-center items-center"
      >
        <Image
          style={{ width: wp(14), height: wp(14) }}
          className="rounded-2xl"
          src={item.image}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: wp(2.5) }} className="text-neutral-400 ">{item.name}</Text>
    </View>
  );
};

export default StoryCard;
