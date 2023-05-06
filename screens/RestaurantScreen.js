import { Text, ScrollView, Image, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
  const {
    params: { item },
  } = useRoute();
  const { imgUrl, title, rating, genre, address, short_description, dishes } =
    item;
  return (
    <ScrollView>
      <Image style={{ height: 225, width: "100%" }} source={{ uri: imgUrl }} />
      <View style={{ padding: 10, rowGap: 7.5, backgroundColor: "white" }}>
        <View>
          <Text style={{ fontWeight: "bold", paddingTop: 5, fontSize: 25 }}>
            {title}
          </Text>
        </View>
        <View style={{ flexDirection: "row", columnGap: 15 }}>
          <Text style={{ padding: 1 }}>
            <Text style={{ color: "green" }}>⭐ {rating}</Text> . {genre}
          </Text>
          <Text style={{ color: "#444444" }}>Nearby . {address}</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", color: "grey" }}>
            {short_description}
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "#dedede", paddingVertical: 12.5 }}>
        <Text style={{ paddingLeft: 25, fontWeight: "bold", fontSize: 20 }}>
          Menu
        </Text>
      </View>
      <ScrollView>
        {dishes.map((dish) => {
          return <DishRow dish={dish} key={dish.id} />;
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default RestaurantScreen;
