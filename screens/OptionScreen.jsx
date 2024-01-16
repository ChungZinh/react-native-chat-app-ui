import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  Entypo,
  FontAwesome5,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import OptionCard from "../components/OptionCard";
const OptionScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgWhite }}>
      <StatusBar backgroundColor={COLORS.bgWhite} />
      <View className="px-4">
        <Text style={{ fontSize: wp(5), fontFamily: "bold" }}>Setting</Text>
      </View>

      <View className="px-4" style={{ marginTop: hp(4) }}>
        <TouchableOpacity className="flex-row justify-between items-center">
          <View className="flex-row space-x-4 items-center">
            <Image
              src="https://www.refugee-action.org.uk/wp-content/uploads/2016/10/anonymous-user.png"
              style={{ width: wp(12.5), height: wp(12.5), borderRadius: wp(6) }}
            />

            <View className="space-y-2">
              <Text style={{ fontSize: wp(4), fontFamily: "bold" }}>
                Chung Vinh
              </Text>
              <Text style={{ fontSize: wp(3), fontFamily: "light" }}>
                +843-8693-4153
              </Text>
            </View>
          </View>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="px-4" style={{ marginTop: hp(4) }}>
        <OptionCard option={"Account"}>
          <FontAwesome5 name="user" size={24} color="black" />
        </OptionCard>
        <OptionCard option={"Chats"}>
          <Feather name="message-circle" size={24} color="black" />
        </OptionCard>
      </View>

      <View
        className="px-4 border-b-0.5 border-neutral-300 pb-2"
        style={{ marginTop: hp(4) }}
      >
        <OptionCard option={"Appereance"}>
          <Feather name="sun" size={24} color="black" />
        </OptionCard>
        <OptionCard option={"Notification"}>
          <MaterialIcons name="notifications-none" size={26} color="black" />
        </OptionCard>
        <OptionCard option={"Privacy"}>
          <MaterialCommunityIcons
            name="shield-alert-outline"
            size={24}
            color="black"
          />
        </OptionCard>
        <OptionCard option={"Data Usage"}>
          <MaterialIcons name="folder-open" size={24} color="black" />
        </OptionCard>
      </View>

      <View className="px-4 pt-2">
        <OptionCard option={"Help"}>
          <MaterialCommunityIcons
            name="help-circle-outline"
            size={24}
            color="black"
          />
        </OptionCard>
        <OptionCard option={"Invite Your Friends"}>
          <Feather name="mail" size={24} color="black" />
        </OptionCard>
      </View>
    </SafeAreaView>
  );
};

export default OptionScreen;
