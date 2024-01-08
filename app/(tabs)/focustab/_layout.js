import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Focus",
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name="addTemplate"
        options={{
          headerShown: true,
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
