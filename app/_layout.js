import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signin"
        options={{
          headerTitle: "Sign in",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerTitle: "Sign up",
        }}
      />
      <Stack.Screen
        name="forgotpassword"
        options={{
          headerTitle: "Reset password",
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
