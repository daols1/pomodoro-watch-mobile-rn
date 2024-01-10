import { View, Text, FlatList } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { notificationsList } from "../../utils/notifications";

export default function notification() {
  return (
    <SafeAreaView className=" p-5 ">
      <FlatList
        data={notificationsList}
        renderItem={({ item }) => {
          return (
            <View className="p-5 rounded-md bg-white mb-2 ">
              <Text className=" font-semibold text-[16px] ">{item.title}</Text>
              <Text className="my-1">{item.timeStamp}</Text>
              <Text>{item.descrption}</Text>
            </View>
          );
        }}
      />
      {/* <Link asChild href={"/"}>
        <Text>Go to back</Text>
      </Link> */}
    </SafeAreaView>
  );
}
