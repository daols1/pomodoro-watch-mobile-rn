import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function notification() {
  return (
    <SafeAreaView>
      <Text>notification</Text>
      <Link asChild href={"/"}>
        <Text>Go to back</Text>
      </Link>
    </SafeAreaView>
  );
}
