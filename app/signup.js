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

export default function Signup() {
  const {
    control,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      occupation: "",
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
      <View className="mt-14  ">
        {/* <Image source={signinpic} className="w-32 h-32 self-center " /> */}
        {/* Full name */}
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Full name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="py-4 bg-[#F7F7F7] text-[18px] mx-8 px-2 focus:outline-[#28303F] mb-8 "
            />
          )}
          name="fullName"
        />
        {/* Email */}
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
        {/* What do you do? */}
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="What do you do?"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="py-4 bg-[#F7F7F7] text-[18px] mx-8 px-2 focus:outline-[#28303F] mb-8 "
            />
          )}
          name="occupation"
        />
        {/* Password */}
        <Controller
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
        />
        <Btn
          displyText="Sign Up"
          bg={"#75CE8E"}
          full
          onPressFn={handleSubmit(onSubmit)}
        />
      </View>
      <View>
        <Text className="px-10 text-center text-xl my-2 ">
          Continue with google
        </Text>
        <Link
          className=" self-center text-[20px] my-3 text-[#75CE8E] "
          href={"/signin"}
        >
          or sign in
        </Link>
      </View>
      <Link asChild href={"/hometab"} replace>
        <Text>Dashboard</Text>
      </Link>
    </View>
  );
}
