import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
const ChatCard = ({ item, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between"
      style={{ height: hp(10) }}
    >
      <View className="flex-row space-x-4 items-center">
        <Image
          src={item.image}
          style={{ width: wp(14), height: wp(14), borderRadius: 12 }}
        />
        <View className="space-y-2">
          <Text style={{ fontFamily: "bold", fontSize: wp(4) }}>
            {item.name}
          </Text>
          <Text style={{ fontFamily: "light", fontSize: wp(3) }}>Online</Text>
        </View>
      </View>
      <View className="space-y-2 items-center">
        <Text>Today</Text>
        <View
          className="justify-center items-center"
          style={{
            width: wp(4),
            height: wp(4),
            borderRadius: wp(2),
            backgroundColor: COLORS.second,
          }}
        >
          <Text
            style={{
              fontSize: wp(3),
              color: COLORS.primary,
              fontFamily: "bold",
            }}
          >
            1
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatCard;
