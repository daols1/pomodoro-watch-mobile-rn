import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function focustab() {
  return (
    <View>
      <Text>focustab</Text>
      <Link href={"/(tabs)/focustab/addTemplate"}>
        <Text> Go to Add template details</Text>
      </Link>
    </View>
  );
}
