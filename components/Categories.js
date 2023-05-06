import { FlatList, ScrollView, Text, View } from "react-native";
import React, { useContext } from "react";
import CategoryCard from "./CategoryCard";
import foodContext from "../Context/food/foodContext";
import VirtualizedScrollView from "./VirtualizedScrollView";
import { SafeAreaView } from "react-native-safe-area-context";

const Categories = () => {
  const context = useContext(foodContext);
  const { category } = context;

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <FlatList
        keyExtractor={(key) => {
          return key.id;
        }}
        horizontal
        data={category}
        renderItem={({ item }) => {
          return <CategoryCard item={item} />;
        }}
      />
    </ScrollView>
  );
};

export default Categories;
