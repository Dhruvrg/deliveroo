import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#00CCBB",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="bounceIn"
        iterationCount={1}
        style={{ height: "45%", width: "100%" }}
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={{ color: "white", paddingTop: 50 }}
      >
        Waiting for Restaurant to accept your order:
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
