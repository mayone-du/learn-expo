import type { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/home";
import { RootStackParamList } from "./src/routes";
import { NativeBaseProvider } from "native-base";
import { SettingsScreen } from "./src/screens/settings";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"Home"}
            options={{ title: "ホーム" }}
            component={HomeScreen}
          />
          <Stack.Screen
            name={"Settings"}
            options={{ title: "設定" }}
            component={SettingsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
