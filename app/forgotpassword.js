// import { View, Text } from "react-native";
import React from "react";
// signinpic;
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { Defs, G, Path, Rect, Svg } from "react-native-svg";
import signinpic from "../assets/signinpic.png";
import Btn from "./components/pressableBtn";
import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import useRoutesFn from "./hooks/useRoutesFn";

export default function Forgotpassword() {
  const {
    control,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
    router.push("/hometab");
  };

  const btnHandler = () => {
    handleSubmit(onSubmit);
  };
  // console.log(btnHandler("home", true));
  return (
    <View className=" bg-[#FFFFFF] h-screen">
      {/* <Text className="text-3xl text-center font-semibold my-5 ">
        Welcome !
      </Text> */}
      <View className=" mt-10 ">
        {/* <Image source={signinpic} className="w-32 h-32 self-center " /> */}
        <Text className="px-10 text-[20px] text-center mb-4 ">
          Please type in your email, we will send you a link to reset the
          password.
        </Text>

        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="py-4 bg-[#F7F7F7] text-[18px] mx-8 px-2 focus:outline-[#28303F] mb-6 "
            />
          )}
          name="email"
        />
        {errors.email?.type == "pattern" && (
          <Text className="text-red-500 mx-8">
            Please put in a valid email.
          </Text>
        )}
        {errors.email?.type == "required" && (
          <Text className="text-red-500 mx-8">This field can't be empty</Text>
        )}

        {/* <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="py-4 bg-[#F7F7F7] text-[18px] mx-8 px-2 focus:outline-[#28303F] mb-8 "
            />
          )}
          name="password"
        /> */}
        <Btn
          displyText="Send link"
          bg={"#75CE8E"}
          full
          onPressFn={handleSubmit(onSubmit)}
        />
      </View>
      <View></View>
      <Link asChild href={"/hometab"} replace>
        <Text>Dashboard</Text>
      </Link>
    </View>
  );
}
