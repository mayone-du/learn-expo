import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

export type ScreensProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
