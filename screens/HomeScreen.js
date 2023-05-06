import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={styles.navbarStyle}>
        <Image
          style={styles.logoStyle}
          source={require("../assets/logo.jpeg")}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", color: "grey" }}>Deliver Now</Text>
          <Text style={{ fontWeight: "bold" }}>Current Location</Text>
        </View>
        <Icon size={35} name="user" color="#00CCBB" />
      </View>
      <View style={styles.containerStyle}>
        <View style={styles.innerContainerStyle}>
          <Icon size={20} name="search" color="#00CCBB" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <Icon size={25} name="filter" color="#00CCBB" />
      </View>
      <ScrollView style={{ backgroundColor: "#ececec" }}>
        <Categories />
        <FeaturedRow
          id="1"
          title="Offers near you!"
          description="Why not support your local restaurant tonight"
        />
        <FeaturedRow
          id="2"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="3"
          title="Tasty Discounts"
          description="Everyone been enjoying these juicy discounts"
        />
        <Text style={{ width: "100%", height: 112.5 }}></Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    backgroundColor: "#ececec",
    height: "100%",
    width: "10%",
    borderRadius: 50,
  },
  navbarStyle: {
    display: "flex",
    flexDirection: "row",
    columnGap: 7.5,
    backgroundColor: "white",
    padding: 3.5,
  },
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
  innerContainerStyle: {
    flexDirection: "row",
    columnGap: 5,
    backgroundColor: "#dedede",
    padding: 7.5,
    alignItems: "center",
    flex: 1,
    margin: 5,
    borderRadius: 5,
  },
});

export default HomeScreen;
