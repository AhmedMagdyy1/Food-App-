import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "Food-App",
          cardStyle: { backgroundColor: "#bdc3c7" },
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: {
            fontSize: 20,
            color: "#1db92b",
          },
        }}
      >
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Result" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
