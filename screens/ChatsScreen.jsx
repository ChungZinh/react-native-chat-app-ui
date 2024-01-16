import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../constants/colors";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import { contacts } from "../constants";
import StoryCard from "../components/StoryCard";
import ChatCard from "../components/ChatCard";
import { useNavigation } from "@react-navigation/native";
const ChatsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgWhite }}>
      <StatusBar backgroundColor={COLORS.bgWhite} />
      <View className="px-4 items-center justify-between flex-row">
        <Text style={{ fontSize: wp(5), fontFamily: "bold" }}>Chats</Text>
        <View className="flex-row items-center space-x-4">
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="chat-plus-outline"
              size={28}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="menu-open" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* STORY */}

      <View
        style={{ marginTop: hp(4), paddingBottom: hp(2) }}
        className="border-b-0.5 border-neutral-300"
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row"
        >
          <View className=" items-center space-y-2">
            <TouchableOpacity
              style={{
                width: wp(15),
                height: wp(15),
              }}
              className=" mx-2 border-2 rounded-2xl justify-center items-center border-neutral-400"
            >
              {/* <FontAwesome6 name="plus" size={24} color="black" /> */}
              <Feather name="plus" size={24} color="#c3c3c3" />
            </TouchableOpacity>
            <Text style={{ fontSize: wp(2.5) }} className="text-neutral-400 ">
              Your Story
            </Text>
          </View>
          {contacts.map((item) => {
            return <StoryCard key={item.id} item={item} />;
          })}
        </ScrollView>
      </View>

      {/* SEARCH BAR */}

      <View className="items-center">
        <View
          className="flex-row rounded-md shadow-md shadow-neutral-400 items-center px-4 space-x-4"
          style={{
            width: wp(90),
            height: hp(5),
            backgroundColor: "#f3f3f3",
            marginTop: hp(2),
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

      {/* LIST CHATS */}

      <View style={{ marginTop: hp(2) }} className="px-4">
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <ChatCard onPress={() => navigation.navigate('ChatD', {item})} item={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatsScreen;
