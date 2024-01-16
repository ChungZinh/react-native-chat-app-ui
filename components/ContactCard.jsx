import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const ContactCard = ({ item }) => {
  return (
    <Pressable
      className="flex-row space-x-4 items-center border-b-0.5 border-neutral-300"
      style={{ height: hp(10) }}
    >
      <Image
        src={item.image}
        style={{ width: wp(14), height: wp(14), borderRadius: 12 }}
      />
      <View className='space-y-2'>
        <Text style={{fontFamily: 'bold', fontSize: wp(4)}}>{item.name}</Text>
        <Text style={{fontFamily: 'light', fontSize: wp(3)}}>Online</Text>
      </View>
    </Pressable>
  );
};

export default ContactCard;
