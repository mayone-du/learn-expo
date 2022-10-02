import type { ComponentProps, FC, ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./src/screens/home";
import { RootStackParamList } from "./src/routes";
import { NativeBaseProvider } from "native-base";
import { SettingsScreen } from "./src/screens/settings";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<RootStackParamList>();

const ICONS: Record<
  keyof RootStackParamList,
  ComponentProps<typeof FontAwesome>["name"]
> = {
  Home: "home",
  Settings: "gear",
} as const;

const App: FC = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              return (
                <FontAwesome
                  name={ICONS[route.name]}
                  size={size}
                  color={color}
                />
              );
            },
          })}
        >
          <Tab.Screen
            name={"Home"}
            options={{ title: "ホーム" }}
            component={HomeScreen}
          />
          <Tab.Screen
            name={"Settings"}
            options={{ title: "設定" }}
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
