import { View, Text, Button } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Hello World!</Text>
      <Link href="/screen/registerscreen" asChild>
        <Button title="Open Register Screen" />
      </Link>
      <Link href="/screen/loginscreen" asChild>
        <Button title="Open Login Screen" />
      </Link>
    </View>
  );
}
