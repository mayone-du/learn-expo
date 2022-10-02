import type { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN_NAMES, SCREEN_NAME_CONFIGS } from "./src/routes";

const Stack = createNativeStackNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {SCREEN_NAMES.map((val) => {
          return (
            <Stack.Screen
              key={val}
              name={val}
              options={{ title: SCREEN_NAME_CONFIGS[val].title }}
              component={SCREEN_NAME_CONFIGS[val].component}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
