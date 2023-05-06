import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import foodContext from "../Context/food/foodContext";

const FeaturedRow = ({ title, description, id }) => {
  const context = useContext(foodContext);
  const { food } = context;
  return (
    <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 17.5 }}>{title}</Text>
      <Text style={{ color: "grey" }}>{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 2.5 }}
      >
        <FlatList
          keyExtractor={(key) => {
            return key.id;
          }}
          horizontal
          data={food[0][id]}
          renderItem={({ item }) => {
            return <RestaurantCard item={item} />;
          }}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
