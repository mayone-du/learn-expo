import { FC } from "react";
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScreensProps } from "../routes";

export const SettingsScreen: FC<ScreensProps<"Settings">> = () => {
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button
        title="go home"
        onPress={() => {
          alert("go home");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
};
