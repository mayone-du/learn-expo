import {
  Actionsheet,
  Box,
  VStack,
  HStack,
  Image,
  Text,
  useDisclose,
} from "native-base";
import { FC } from "react";
import { GestureResponderHandlers, Animated, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ACTION_OFFSET } from "../../../constants";
import { selectionAsync } from "expo-haptics";

type Data = {
  shopName: string;
  star: number;
};

type Props = {
  panHandlers: GestureResponderHandlers;
  swipe: Animated.ValueXY;
  isFirst: boolean;
  data: Data;
};

export const Card: FC<Props> = ({ panHandlers, swipe, isFirst, data }) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  const style: Parameters<typeof Animated["View"]>[0]["style"] = {
    transform: [
      ...swipe.getTranslateTransform(),
      {
        rotate: swipe.x.interpolate({
          inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
          outputRange: ["8deg", "0deg", "-8deg"],
        }),
      },
    ],
  };

  const onLongPress = () => {
    onOpen();
    selectionAsync();
  };

  return (
    <Animated.View {...panHandlers} style={isFirst ? style : undefined}>
      <Pressable onLongPress={onLongPress}>
        <Box
          shadow="4"
          bg="white"
          rounded="lg"
          overflow="hidden"
          position="absolute"
          w="full"
        >
          <VStack space="4" pb="4">
            <HStack w="full" h="80">
              <Image
                source={{ uri: "https://picsum.photos/200" }}
                alt=""
                w="1/2"
                h="full"
              />
              <VStack w="full" h="full">
                <Image
                  source={{ uri: "https://picsum.photos/200" }}
                  alt=""
                  w="1/2"
                  h="1/2"
                />
                <Image
                  source={{ uri: "https://picsum.photos/200" }}
                  alt=""
                  w="1/2"
                  h="1/2"
                />
              </VStack>
            </HStack>
            <Box px="2">
              <Text fontWeight="bold" fontSize="xl" numberOfLines={1}>
                {data.shopName}
              </Text>
              <HStack justifyContent="space-between">
                <Text>徒歩 {Math.round(Math.random() * 100)} 分</Text>
                <HStack space="1">
                  <Text
                    textAlign="center"
                    color="orange.400"
                    fontWeight={"bold"}
                  >
                    {data.star}
                  </Text>
                  <Text color="orange.400">
                    <FontAwesome name="star" />
                    <FontAwesome name="star" />
                    <FontAwesome name="star" />
                    <FontAwesome name="star" />
                    <FontAwesome name="star" />
                  </Text>
                </HStack>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box h="full">
            <Text fontWeight="bold" fontSize={"xl"}>
              {data.shopName}
            </Text>
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              alt=""
              w="300"
              h="300"
            />
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </Animated.View>
  );
};
