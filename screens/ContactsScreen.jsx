import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import { Entypo, AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { contacts } from "../constants";
import ContactCard from "../components/ContactCard";
const ContactsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgWhite }}>
      <StatusBar backgroundColor={COLORS.bgWhite} />
      <View className="flex-row justify-between px-4">
        <Text style={{ fontSize: wp(5), fontFamily: "bold" }}>Contacts</Text>
        <Pressable>
          <Entypo name="plus" size={28} color="black" />
        </Pressable>
      </View>

      <View className="items-center">
        <View
          className="flex-row rounded-md shadow-md shadow-neutral-400 items-center px-4 space-x-4"
          style={{
            width: wp(90),
            height: hp(5),
            backgroundColor: "#f3f3f3",
            marginTop: hp(4),
          }}
        >
          <AntDesign name="search1" size={22} color="#b3b3b3" />
          <TextInput
            style={{
              width: wp(80),
              height: hp(5),
            }}
            placeholder="Search..."
            placeholderTextColor={"#b3b3b3"}
            // value={phoneNumber}
            // onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
      </View>

      <View className="px-4" style={{ marginTop: hp(4) }}>
        <FlatList
          data={contacts}
          renderItem={({ item }) => {
            return <ContactCard item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactsScreen;
