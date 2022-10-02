import { FC } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScreensProps } from "../routes";
import {
  Input,
  Box,
  Text,
  FormControl,
  Pressable,
  VStack,
  HStack,
} from "native-base";

export const SettingsScreen: FC<ScreensProps<"Settings">> = () => {
  return (
    <View>
      <VStack space="4" mx="4" mt="4">
        <FormControl bg="white" p="4" rounded="lg">
          <FormControl.Label>検索キーワード</FormControl.Label>
          <Input />
        </FormControl>
        <HStack w="full" bg="white" p="4" rounded="lg">
          <Pressable
            w="48%"
            borderWidth={"1"}
            borderColor="gray.200"
            p="2"
            borderRadius="lg"
          >
            <Box w="full">
              <Text textAlign="center">表示する</Text>
            </Box>
          </Pressable>
          <Box w="4%" />
          <Pressable
            w="48%"
            borderWidth={"1"}
            borderColor="gray.200"
            p="2"
            borderRadius="lg"
          >
            <Box w="full">
              <Text textAlign="center">表示しない</Text>
            </Box>
          </Pressable>
        </HStack>
      </VStack>

      <StatusBar style="auto" />
    </View>
  );
};
