import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  Ionicons,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const SetProfileScreen = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const inputDate = new Date(date);

  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
    inputDate
  );
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgWhite }}>
      <StatusBar backgroundColor={COLORS.bgWhite} />
      <View className="px-4 flex-row space-x-2 items-center">
        <Ionicons name="chevron-back" size={28} color="black" />
        <Text style={{ fontSize: wp(5), fontFamily: "regular" }}>
          Your Profile
        </Text>
      </View>

      <View className="flex-1 items-center justify-center">
        <View>
          <View
            style={{
              width: wp(30),
              height: wp(30),
              backgroundColor: "#f3f3f3",
            }}
            className="rounded-full shadow-md shadow-neutral-200 justify-center items-center"
          >
            <FontAwesome5 name="user" size={wp(14)} color="black" />
          </View>
          <Pressable className="absolute bottom-1 right-2">
            <FontAwesome name="plus-circle" size={24} color="black" />
          </Pressable>
        </View>

        <View>
          <TextInput
            className="px-4 rounded-md shadow-md shadow-neutral-400"
            style={{
              width: wp(85),
              height: hp(5),
              backgroundColor: "#f3f3f3",
              marginTop: hp(6),
              marginBottom: hp(3),
            }}
            placeholder="First Name (Required)"
            placeholderTextColor={"#d3d3d3"}
            // value={phoneNumber}
            // onChangeText={(text) => setPhoneNumber(text)}
          />
          <TextInput
            className="px-4 rounded-md shadow-md shadow-neutral-400"
            style={{
              width: wp(85),
              height: hp(5),
              backgroundColor: "#f3f3f3",
              marginBottom: hp(3),

            }}
            placeholder="Last Name (Optional)"
            placeholderTextColor={"#d3d3d3"}
            // value={phoneNumber}
            // onChangeText={(text) => setPhoneNumber(text)}
          />

          <View style={{ marginBottom: hp(2) }} className="flex-row space-x-6">
            <Text style={{ fontFamily: "bold", fontSize: wp(4.5) }}>
              Gender :{" "}
            </Text>

            <View className="flex-row space-x-6">
              <Pressable
                onPress={() => {
                  setMale(!male);
                  setFemale(!female);
                }}
                className="flex-row items-center  space-x-2"
              >
                {male ? (
                  <MaterialIcons name="check-box" size={24} color="black" />
                ) : (
                  <MaterialIcons
                    name="check-box-outline-blank"
                    size={24}
                    color="black"
                  />
                )}
                <Text>Male</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setMale(!male);
                  setFemale(!female);
                }}
                className="flex-row items-center  space-x-2"
              >
                {female ? (
                  <MaterialIcons name="check-box" size={24} color="black" />
                ) : (
                  <MaterialIcons
                    name="check-box-outline-blank"
                    size={24}
                    color="black"
                  />
                )}
                <Text>Female</Text>
              </Pressable>
            </View>
          </View>

          <View
            style={{ marginTop: hp(2) }}
            className="flex-row space-x-6 items-center"
          >
            <Text style={{ fontFamily: "bold", fontSize: wp(4.5) }}>
              Date :
            </Text>
            <Pressable onPress={showDatepicker}>
              <Fontisto name="date" size={24} color="black" />
            </Pressable>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}

            <Text>{formattedDate}</Text>
          </View>
        </View>
      </View>

      <View className=' items-center justify-center' style={{marginBottom: hp(4), marginTop: hp(8)}}>
        <Button onPress={() => navigation.navigate('Main')}>Save</Button>
      </View>
    </SafeAreaView>
  );
};

export default SetProfileScreen;
