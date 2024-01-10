import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Btn({ displyText, icon, bg, link, full }) {
  return (
    <Pressable
      onPress={() => console.log(`${displyText} btn clicked `)}
      className="mx-8 my-2  "
    >
      <Link
        href={`/${link}`}
        className={` bg-[${bg}] py-5 mx-auto px-10 text-center ${
          full ? "w-[100%]" : null
        } `}
      >
        {icon}
        <Text className="text-[20px]  ">{displyText}</Text>
      </Link>
    </Pressable>

    // <Link
    //   href={`/${link}`}
    //   className={`mx-auto my-4 bg-[${bg}] ${full ? "w-[90%] " : null} `}
    // >
    //   <Pressable className=" items-center mx-auto px-[155] ">
    //     <View className="flex-row py-5  ">
    //       {icon}
    //       <Text className="text-[20px]  ">{displyText}</Text>
    //     </View>
    //   </Pressable>
    // </Link>
  );
}
