import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import FoodState from "./Context/food/FoodState";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import Delivery from "./screens/Delivery";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <FoodState>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Restaurant"
            component={RestaurantScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="PreparingOrderScreen"
            component={PreparingOrderScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Delivery"
            component={Delivery}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FoodState>
  );
}
