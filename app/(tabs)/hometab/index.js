import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bell, Play } from "lucide-react-native";

export default function hometab() {
  const [switcher, setSwitcher] = useState(0);

  return (
    <SafeAreaView className=" bg-white ">
      <View className="flex-row  justify-between my-5 px-6 ">
        <View>
          <Text className=" text-[16px] ">Good Afternoon</Text>
          <Text className=" font-semibold text-[20px] ">Scarlet Anderson</Text>
        </View>
        <Link asChild href={"/(tabs)/hometab/notification"}>
          <Bell size={32} color={"#515772"} />
        </Link>
      </View>
      <View className="bg-[#F5F5F5] p-6 ">
        <Text className=" font-semibold text-[20px] ">Quick Focus</Text>
        <View className="bg-[#75CE8E] p-6 rounded  ">
          <View className=" flex-row justify-center mb-3 ">
            <Text
              onPress={() => setSwitcher(0)}
              className={`px-3 text-[16px] text-white p-2 ${
                switcher === 0 ? "bg-[#F5F5F580] text-black " : null
              } `}
            >
              Pomodoro
            </Text>
            <Text
              onPress={() => setSwitcher(1)}
              className={`px-3 text-[16px] text-white p-2 ${
                switcher === 1 ? "bg-[#F5F5F580] text-black " : null
              } `}
            >
              Short break
            </Text>
            <Text
              onPress={() => setSwitcher(2)}
              className={`px-3 text-[16px] text-white p-2 ${
                switcher === 2 ? "bg-[#F5F5F580] text-black " : null
              } `}
            >
              Long break
            </Text>
          </View>
          <View className="p-24 m-5 bg-[#F5F5F533] border-[1px] border-[#FFFFFFB2] rounded-md ">
            <View className="flex-row justify-center ">
              <Text className="bg-white p-3 rounded-2xl font-semibold text-[40px] ">
                00
              </Text>
              <Text className="p-3 rounded-2xl font-semibold text-[40px] ">
                :
              </Text>
              <Text className="bg-white p-3 rounded-2xl font-semibold text-[40px] ">
                00
              </Text>
            </View>
          </View>
          <View className=" flex-row items-center bg-white p-5 m-5 justify-center ">
            <Play color={"#75CE8E"} />
            <Text className="text-[20px] mx-2 ">Start</Text>
          </View>
        </View>
        <View></View>
      </View>

      {/* <Link asChild href={"/"} replace>
        <Text>index</Text>
      </Link> */}
    </SafeAreaView>
  );
}
