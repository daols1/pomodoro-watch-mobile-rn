import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { PlusCircle } from "lucide-react-native";

export default function focustab() {
  return (
    // <View>

    //   <Link href={"/(tabs)/focustab/addTemplate"}>
    //     <Text> Go to Add template details</Text>
    //   </Link>
    // </View>
    <Link
      href={"/(tabs)/focustab/addTemplate"}
      className=" mx-auto mt-5 justify-center "
    >
      <View className=" flex-row items-center bg-[#75CE8E] p-5  justify-center ">
        <PlusCircle color={"white"} />
        <Text className="text-[20px] mx-2 text-center text-white ">
          Add Template
        </Text>
      </View>
    </Link>
  );
}
