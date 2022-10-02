import { FC, useRef } from "react";
import {
  View,
  Text,
  Button,
  Animated,
  PanResponder,
  GestureResponderHandlers,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScreensProps } from "../routes";
import { Box, VStack } from "native-base";

export const HomeScreen: FC<ScreensProps<"Home">> = ({ navigation }) => {
  // const handleNavigateSettings = () => navigation.navigate("Settings");

  const swipe = useRef(new Animated.ValueXY()).current;
  const { panHandlers } = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, { dx, dy }) => {
        swipe.setValue({ x: dx, y: dy });
      },
      onPanResponderRelease: () => {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 10,
        });
      },
    })
  ).current;

  return (
    <View>
      <Card swipe={swipe} panHandlers={panHandlers} />
      <StatusBar style="auto" />
    </View>
  );
};

type Props = {
  panHandlers: GestureResponderHandlers;
  swipe: Animated.ValueXY;
};
const Card: FC<Props> = ({ panHandlers, swipe }) => {
  const animatedStyle = {
    transform: [...swipe.getTranslateTransform()],
  };

  return (
    <Animated.View {...panHandlers} style={animatedStyle}>
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
    </Animated.View>
  );
};
