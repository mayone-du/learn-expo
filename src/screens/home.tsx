import { FC } from "react";
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScreensProps } from "../routes";

export const HomeScreen: FC<ScreensProps<"Home">> = ({ navigation }) => {
  const handleNavigateSettings = () => navigation.navigate("Settings");
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="go settings" onPress={handleNavigateSettings} />
      <StatusBar style="auto" />
    </View>
  );
};
