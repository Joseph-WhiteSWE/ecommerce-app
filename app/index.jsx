import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center bg-gray-400">
      <View>
        {/* amazon image  */}
        <Image
          style={{ width: 400, height: 120 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>

      <Link href="/screen/loginscreen" asChild>
        <TouchableOpacity
          style={{
            width: 200,
            backgroundColor: "#1e293b",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
            marginTop: 30,
          }}
        >
          <Text
            className="text-center text-white font-bold"
            style={{ fontSize: 16 }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/screen/homescreen" asChild>
        <TouchableOpacity
          style={{
            width: 200,
            backgroundColor: "#1e293b",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
            marginTop: 30,
          }}
        >
          <Text
            className="text-center text-white font-bold"
            style={{ fontSize: 16 }}
          >
            Enter without Login
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
