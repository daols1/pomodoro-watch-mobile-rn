import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function profiletab() {
  return (
    <View>
      <Text>profiletab</Text>
      <Link asChild href={"/"} replace>
        <Text>index</Text>
      </Link>
    </View>
  );
}
