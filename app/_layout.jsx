import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="screen/loginscreen"
        options={{
          title: "Login",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="screen/registerscreen"
        options={{
          title: "Register",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
