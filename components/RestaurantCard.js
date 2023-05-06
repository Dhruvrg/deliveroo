import { Image, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ item }) => {
  const { imgUrl, title, rating, genre, address } = item;

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          item,
        });
      }}
      style={{ backgroundColor: "white", marginRight: 5, borderRadius: 5 }}
    >
      <Image
        style={{
          height: 125,
          width: 175,
          borderRadius: 5,
        }}
        source={{ uri: imgUrl }}
      />
      <View style={{ padding: 5 }}>
        <View>
          <Text style={{ fontWeight: "bold", paddingTop: 2.5 }}>{title}</Text>
        </View>
        <View>
          <Text style={{ padding: 1 }}>
            <Text style={{ color: "green" }}>⭐{rating}</Text> . {genre}
          </Text>
        </View>
        <View>
          <Text style={{ color: "grey" }}>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
