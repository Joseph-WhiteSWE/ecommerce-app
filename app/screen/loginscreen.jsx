import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import React from "react";

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white items-center">
      <View>
        {/* amazon image  */}
        <Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>

      <KeyboardAvoidingView>
        {/* login form */}
        <View className="items-center">
          <Text style={{ fontSize: 17 }} className="font-bold mt-6">
            Log in to your account
          </Text>
        </View>

        <View>
          <View
            className="flex-row items-center gap-x-1 rounded mt-20"
            style={{ backgroundColor: "#D0D0D0" }}
          >
            <MaterialIcons name="email" size={24} color="gray" />
            <TextInput
              style={{ color: "black", width: 300 }}
              placeholder="enter your email"
              placeholderTextColor="gray"
              className=" text-black my-2.5"
            />
          </View>
          <View>
            <View
              className="flex-row items-center gap-x-1 rounded mt-16"
              style={{ backgroundColor: "#D0D0D0" }}
            >
              <Entypo name="lock" size={24} color="gray" />
              <TextInput
                style={{ color: "black", width: 300 }}
                placeholder="enter your password"
                placeholderTextColor="gray"
                className=" text-black my-2.5"
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
