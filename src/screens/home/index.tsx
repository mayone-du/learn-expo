import { FC, useCallback, useRef, useState } from "react";
import { View, Animated, PanResponder, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScreensProps } from "../../routes";
import { Box, Text, HStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { dummyData } from "../../mock/data";
import { Card } from "./components/Card";
import { ACTION_OFFSET } from "../../constants";
import { screenWidth } from "../../utils/screenSize";
import * as Haptics from "expo-haptics";

export const HomeScreen: FC<ScreensProps<"Home">> = ({ navigation }) => {
  const [dataList, setDataList] = useState(dummyData);

  const swipe = useRef(new Animated.ValueXY()).current;
  const { panHandlers } = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, { dx, dy }) => {
        swipe.setValue({ x: dx, y: dy });
      },
      onPanResponderRelease: (_, { dx, dy }) => {
        const direction = Math.sign(dx);
        const isActionActive = Math.abs(dx) > ACTION_OFFSET;
        if (isActionActive) {
          Haptics.selectionAsync();
          Animated.timing(swipe, {
            duration: 200,
            toValue: {
              x: direction * (screenWidth + 0.5 * screenWidth),
              y: dy,
            },
            useNativeDriver: true,
          }).start(removeTopCard);
        } else {
          Animated.spring(swipe, {
            toValue: {
              x: 0,
              y: 0,
            },
            useNativeDriver: true,
            friction: 10,
          }).start();
        }
      },
    })
  ).current;

  const removeTopCard = useCallback(() => {
    setDataList((prev) => prev.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const likeOpacity = {
    opacity: swipe.x.interpolate({
      inputRange: [-ACTION_OFFSET, -ACTION_OFFSET / 10],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };

  return (
    <View>
      <Text>{dataList.length}</Text>
      <Box position={"relative"} p="4">
        {dataList
          .map((item, i) => {
            const isFirst = i === 0;
            return (
              <Card
                key={item.shopName}
                isFirst={isFirst}
                swipe={swipe}
                panHandlers={isFirst ? panHandlers : {}}
                data={item}
              />
            );
          })
          .reverse()}
      </Box>
      {/* 
      <Box position={"relative"}>
        <Animated.View style={{ ...likeOpacity }}>
          <Box position="absolute" left="1/2">
            <HStack space="2" alignItems={"center"}>
              <FontAwesome name="heart" size={32} color="#f76685" />
              <Text>候補に入れる</Text>
            </HStack>
          </Box>
        </Animated.View>

        <Animated.View style={{ ...likeOpacity }}>
          <Box position="absolute" left="1/2">
            <HStack space="2" alignItems={"center"}>
              <FontAwesome name="trash" size={32} color="gray" />
              <Text>今日は行かない</Text>
            </HStack>
          </Box>
        </Animated.View>
      </Box> */}
      <StatusBar style="auto" />
    </View>
  );
};
