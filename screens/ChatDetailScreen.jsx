import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { COLORS } from "../constants/colors";
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { GiftedChat, Send, Bubble } from "react-native-gifted-chat";
import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";

const ChatDetailScreen = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const renderInputToolbarr = (props) => (
    <View className="flex-row bg-neutral-200 px-4 " style={{}}>
      <View className="flex-row justify-between  items-center">
        <View className="flex-row space-x-2">
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="sticker-emoji"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <TextInput
            style={{ width: wp(60) }}
            placeholder="Type a ..."
            multiline
            {...props}
          />
        </View>
        <View className="items-center flex-row space-x-4">
          <TouchableOpacity>
            <Feather name="more-horizontal" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="mic-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar:
            "https://www.refugee-action.org.uk/wp-content/uploads/2016/10/anonymous-user.png",
        },
      },
    ]);
  }, []);
  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View className="items-center justify-center  h-full mr-4">
          <MaterialIcons name="send" size={28} color="black" />
        </View>
      </Send>
    );
  };

  const item = route.params.item;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgWhite }}>
      <StatusBar backgroundColor={COLORS.bgWhite} />
      <View
        style={{ zIndex: 666 }}
        className="flex-row justify-between items-center px-4"
      >
        <View className="flex-row space-x-2 items-center ">
          <Entypo name="chevron-left" size={28} color="black" />
          <View>
            <Text style={{ fontSize: wp(4.5), fontFamily: "bold" }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: wp(3), fontFamily: "light" }}>Online</Text>
          </View>
        </View>

        <View className="flex-row space-x-4">
          <TouchableOpacity>
            <Ionicons name="search" size={26} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="menu" size={26} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* <View> */}
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
        alwaysShowSend
        scrollToBottom
        // renderInputToolbar={renderInputToolbarr}
        renderSend={renderSend}
      />
      {/* </View> */}
    </SafeAreaView>
  );
};

export default ChatDetailScreen;
