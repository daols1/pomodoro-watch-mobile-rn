import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Defs, G, Path, Rect, Svg } from "react-native-svg";
import image from "../assets/welcomeimg.png";
import ButtonCustom from "./components/pressableBtn";
import Btn from "./components/pressableBtn";
import { Plus } from "lucide-react-native";
// import ButtonCustom from "./components/ButtonCustom.js";

export default function Page() {
  return (
    <SafeAreaView className="px-10 bg-[#FFFFFF] h-screen ">
      <Text className="text-3xl text-center font-semibold my-5 ">
        Welcome !
      </Text>
      <View className="mt-28 ">
        <Image source={image} className="w-32 h-32 self-center " />
        <Text className="text-center text-[16px] my-3 ">
          Increase your productivity and manage your time effectively with
          Pomodore.
        </Text>
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
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
