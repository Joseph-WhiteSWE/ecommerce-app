import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Link } from "expo-router";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
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
            Register for an account
          </Text>
        </View>

        <View>
          <View
            className="flex-row items-center rounded mt-10 pl-2"
            style={{ backgroundColor: "#D0D0D0", gap: 5 }}
          >
            <FontAwesome name="user" size={24} color="gray" />
            <TextInput
              value={user}
              onChangeText={text => setUser(text)}
              style={{ color: "black", width: 300, fontSize: user ? 16 : 16 }}
              placeholder="enter your name"
              placeholderTextColor="gray"
              className=" text-black my-2.5"
            />
          </View>
          <View
            className="flex-row items-center rounded mt-10 pl-2"
            style={{ backgroundColor: "#D0D0D0", gap: 5 }}
          >
            <MaterialIcons name="email" size={24} color="gray" />
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              style={{
                color: "black",
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="enter your email"
              placeholderTextColor="gray"
              className=" text-black my-2.5"
            />
          </View>
          <View>
            <View
              className="flex-row items-center rounded mt-10 pl-2"
              style={{ backgroundColor: "#D0D0D0", gap: 5 }}
            >
              <Entypo name="lock" size={24} color="gray" />
              <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
                style={{
                  color: "black",
                  width: 300,
                  fontSize: password ? 16 : 16,
                }}
                placeholder="enter your password"
                placeholderTextColor="gray"
                className=" text-black my-2.5"
              />
            </View>
          </View>
        </View>
        <View className="flex-row justify-between items-center mt-4">
          <Text style={{ fontWeight: "500" }}>Keep me logged in</Text>
          <Text style={{ color: "#007fff", fontWeight: "500" }}>
            Forgot Password
          </Text>
        </View>
        <View className="mt-16" />
        <TouchableOpacity
          style={{
            width: 200,
            backgroundColor: "#febe10",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Link href="/screen/homescreen" asChild>
            <Text
              className="text-center text-white font-bold"
              style={{ fontSize: 16 }}
            >
              Sign Up
            </Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity className="mt-5">
          <Link href="/screen/loginscreen" asChild>
            <Text
              style={{ fontSize: 16 }}
              className="text-center text-gray-500"
            >
              Already have an account? Sign in
            </Text>
          </Link>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
