import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "react-native-animated-progress";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const Delivery = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#00CCBB", flex: 1 }}>
      <SafeAreaView>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            padding: 15,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={{ color: "white" }}>Home</Text>
          </TouchableOpacity>
          <Text style={{ color: "white" }}>Order Help</Text>
        </View>
        <View
          style={{
            rowGap: 10,
            backgroundColor: "white",
            borderRadius: 5,
            margin: 25,
            paddingVertical: 15,
            paddingHorizontal: 12.5,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ color: "gray" }}>Estimated Arrival</Text>
              <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                45-55 Minutes
              </Text>
            </View>
            <Image
              style={{ height: 75, width: 75 }}
              source={require("../assets/deliveryImage.jpeg")}
            />
          </View>
          <ProgressBar
            height={5}
            indeterminate={true}
            animated={true}
            backgroundColor="#00CCBB"
          />
          <Text style={{ marginTop: 5, color: "gray" }}>
            Your order at Nando's is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 19.075983,
          longitude: 72.877655,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        style={{ flex: 1 }}
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{ latitude: 19.075983, longitude: 72.877655 }}
          title="Namo"
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView
        style={{
          backgroundColor: "white",
          height: 60,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 100,
            position: "relative",
            bottom: 20,
            marginHorizontal: 15,
            borderWidth: 1,
            borderColor: "gray",
          }}
          source={require("../assets/deliveryImage.jpeg")}
        />
        <View
          style={{
            flex: 1,
            position: "relative",
            bottom: 20,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Sonny Sangha</Text>
          <Text style={{ color: "gray" }}>Your Rider</Text>
        </View>
        <Text
          style={{
            position: "relative",
            bottom: 20,
            marginRight: 15,
            fontWeight: "bold",
            color: "#00CCBB",
          }}
        >
          Call
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default Delivery;
