import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { BarChartBig, Focus, Home, UserRound } from "lucide-react-native";

export default function _layout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="hometab"
          options={{
            headerShown: false,
            headerTitleAlign: "left",
            // tabBarStyle: {
            //   paddingTop: 20,
            // },
            // style: {
            //   height: 58,
            // },
            tabBarLabel: "Home",
            tabBarActiveTintColor: "#75CE8E",
            tabBarIcon: ({ focused }) => {
              return (
                <Home
                  size={30}
                  color={focused ? (color = "#75CE8E") : "#2A353D"}
                />
              );
            },
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />
        <Tabs.Screen
          name="focustab"
          options={{
            headerShown: false,
            tabBarLabel: "Focus",
            tabBarActiveTintColor: "#75CE8E",
            tabBarIcon: ({ focused }) => {
              return (
                <Focus
                  size={30}
                  color={focused ? (color = "#75CE8E") : "#2A353D"}
                />
              );
            },
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />
        <Tabs.Screen
          name="analyticstab"
          options={{
            headerShown: false,
            tabBarLabel: "Analytics",
            tabBarActiveTintColor: "#75CE8E",
            tabBarIcon: ({ focused }) => {
              return (
                <BarChartBig
                  size={30}
                  color={focused ? (color = "#75CE8E") : "#2A353D"}
                />
              );
            },
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />
        <Tabs.Screen
          name="profiletab"
          options={{
            headerShown: false,
            tabBarLabel: "Profile",
            tabBarActiveTintColor: "#75CE8E",
            tabBarIcon: ({ focused }) => {
              return (
                <UserRound
                  size={30}
                  color={focused ? (color = "#75CE8E") : "#2A353D"}
                />
              );
            },

            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />
      </Tabs>
    </>
  );
}
