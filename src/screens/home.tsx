import { FC } from "react";
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScreensProps } from "../routes";
import { Box, VStack } from "native-base";

export const HomeScreen: FC<ScreensProps<"Home">> = ({ navigation }) => {
  const handleNavigateSettings = () => navigation.navigate("Settings");
  return (
    <View>
      <Card />
      <Button title="go settings" onPress={handleNavigateSettings} />
      <StatusBar style="auto" />
    </View>
  );
};

const Card: FC = () => {
  return (
    <Box shadow="2" p="4" bg="white" m="2" borderRadius="4">
      <VStack>
        <Text>画像</Text>
        <Text>〇〇レストラン</Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          soluta qui, dignissimos aspernatur vitae assumenda tempora. A harum
          nulla ducimus accusantium, ut, sint rem voluptatem dicta ipsa
          repellendus dolorum saepe?
        </Text>
      </VStack>
    </Box>
  );
};
