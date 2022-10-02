import { FC } from "react";
import { HomeScreen } from "../screens/Home";

export const SCREEN_NAMES = ["Home", "Settings"] as const;

export type ScreenNames = typeof SCREEN_NAMES[number];

export const SCREEN_NAME_CONFIGS: Record<
  ScreenNames,
  { component: FC; title: string }
> = {
  Home: {
    title: "ホーム",
    component: HomeScreen,
  },
  Settings: {
    title: "設定",
    component: HomeScreen,
  },
};
