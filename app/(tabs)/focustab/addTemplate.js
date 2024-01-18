import { useState } from "react";

import { View, Text, TextInput } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Btn from "../../components/pressableBtn";
import { Picker } from "@react-native-picker/picker";
import { useSafeAreaFrame } from "react-native-safe-area-context";

export default function addTemplate() {
  const [selectedPriority, setSelectedPriority] = useState("Low");
  const [switcher, setSwitcher] = useState(0);

  const {
    control,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      choice: "",
      description: "",
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

  const itemValue = ["high", "low", "medium"];

  return (
    <View className="p-6">
      <Text className="text-[18px] font-semibold ">Create Template</Text>
      <View>
        <Text className="text-[20px] my-2  ">what do you want to do?</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            // pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="e.g, Assignment, web design..."
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="py-4 bg-[#F7F7F7] text-[18px] px-2 focus:outline-[#28303F] mb-6 "
            />
          )}
          name="choice"
        />
        {errors.email?.type == "required" && (
          <Text className="text-red-500 mx-8">This field can't be empty</Text>
        )}

        <View className="flex-row  ">
          {/* Description. */}
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Description"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="py-4 bg-[#F7F7F7] text-[18px] px-2 focus:outline-[#28303F] mb-8 mr-6 w-[60%]  "
              />
            )}
            name="description"
          />
          {/* Drop down picker. */}
          <View className="w-[30%] ">
            <Picker
              selectedValue={selectedPriority}
              // onValueChange={(itemValue, itemIndex) =>
              //   setSelectedPriority(itemValue)
              // }
              style={{
                // flex: 1,
                width: 100,
                height: 100,
              }}
              prompt="Pick a priority level"
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          {/* <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Description"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="py-4 bg-[#F7F7F7] text-[18px] px-2 focus:outline-[#28303F] mb-8 w-[33%] "
              />
            )}
            name="dropList"
          /> */}
        </View>
        {/* Buttons */}
        <View className=" flex-row justify-start mb-3 w-[100%] ">
          <Text
            onPress={() => setSwitcher(0)}
            className={` text-[16px] text-white p-2 bg-myGreen ${
              switcher === 0 ? " text-black bg-myGreen " : null
            } `}
          >
            Pomodoro
          </Text>
          <Text
            onPress={() => setSwitcher(1)}
            className={`px-3 text-[16px] text-white p-2 bg-myGreen ${
              switcher === 1 ? " text-black bg-myGreen " : null
            } `}
          >
            Short break
          </Text>
          <Text
            onPress={() => setSwitcher(2)}
            className={` text-[16px] text-white p-2 bg-myGreen ${
              switcher === 2 ? " text-black bg-myGreen " : null
            } `}
          >
            Long break
          </Text>
        </View>
        <Btn
          displyText="Create"
          bg={"#75CE8E"}
          full
          onPressFn={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}
