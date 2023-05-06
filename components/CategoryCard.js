import React from "react";
import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const CategoryCard = ({ item }) => {
  const { imgUrl, title } = item;
  return (
    <TouchableOpacity style={{ position: "relative", marginRight: 5 }}>
      <Image
        style={{ height: 100, width: 100, borderRadius: 5 }}
        source={{ uri: imgUrl }}
      />
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    position: "absolute",
    bottom: 1.5,
    left: 1.5,
    color: "white",
    fontWeight: "bold",
  },
});

export default CategoryCard;
