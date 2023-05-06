import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const DishRow = ({ dish }) => {
  const { name, description, price, imgUrl } = dish;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PreparingOrderScreen");
      }}
      style={{
        backgroundColor: "white",
        borderColor: "lightgrey",
        borderWidth: 1,
        padding: 10,
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 17.5 }}>{name}</Text>
        <Text style={{ color: "grey" }}>{description}</Text>
        <Text style={{ color: "grey" }}>Rs.{price}</Text>
      </View>
      <View>
        <Image
          style={{
            height: 75,
            width: 75,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#F3F3F4",
          }}
          source={{ uri: imgUrl }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
