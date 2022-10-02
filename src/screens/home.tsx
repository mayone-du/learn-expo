import { FC } from "react";
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export const HomeScreen: FC = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="hoge"
        onPress={() => {
          alert("hoge");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
};
