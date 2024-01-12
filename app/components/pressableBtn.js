import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, router, useNavigation } from "expo-router";

export default function Btn({ displyText, icon, bg, link, full, onPressFn }) {
  if (!link) {
    return (
      <FnBtn
        bg={bg}
        displyText={displyText}
        full={full}
        icon={icon}
        link={link}
        onPressFn={onPressFn}
      />
    );
  } else {
    return (
      <Pressable onPress={onPressFn} className="mx-8 my-2  ">
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
    );
  }
}

const FnBtn = ({ displyText, icon, bg, full, onPressFn }) => {
  return (
    <Pressable onPress={onPressFn} className="mx-8 my-2  ">
      <View
        className={` bg-[${bg}] py-5 mx-auto px-10 text-center ${
          full ? "w-[100%]" : null
        } `}
      >
        {icon}
        <Text className="text-[20px]  text-center ">{displyText}</Text>
      </View>
    </Pressable>
  );
};
