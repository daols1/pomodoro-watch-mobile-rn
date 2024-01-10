// import { View, Text } from "react-native";
import React from "react";
// signinpic;
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { Defs, G, Path, Rect, Svg } from "react-native-svg";
import signinpic from "../assets/signinpic.png";
import ButtonCustom from "./components/pressableBtn";
import Btn from "./components/pressableBtn";
import { Plus } from "lucide-react-native";

export default function Signin() {
  return (
    <View className=" bg-[#FFFFFF] h-screen">
      {/* <Text className="text-3xl text-center font-semibold my-5 ">
        Welcome !
      </Text> */}
      <View className="mt-28 ">
        <Image source={signinpic} className="w-32 h-32 self-center " />
        {/* <Text className="text-center text-[16px] my-3 ">
          Increase your productivity and manage your time effectively with
          Pomodore.
        </Text> */}
        <TextInput >w q</TextInput>


        <Btn
          displyText="Sign in"
          bg={"#F5F5F5"}
          full
          link="signin"
          // icon={<Plus />}
        />
        <Btn displyText="Sign Up" bg={"#75CE8E"} full link="signup" />
      </View>
      <View>
        <Text className="px-10 text-center text-xl my-2 ">
          Continue with google
        </Text>
      </View>
      <Link asChild href={"/hometab"} replace>
        <Text>Dashboard</Text>
      </Link>
    </View>
  );
}
