import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Make sure you have expo/vector-icons installed

function CustomHeader({ backgroundColor, navigation }) {
  return (
    <View style={[styles.headerContainer, { backgroundColor }]}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Ionicons name="menu" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.logoAndTitleContainer}>
        <Image
          source={require("../assets/13.png")} // Adjust this path as needed
          style={styles.logo}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Hindu</Text>
          <Text style={styles.titleText}>YUVA</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  menuButton: {
    padding: 10,
  },
  logoAndTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    marginRight: 10, // Space between logo and text
  },
  titleContainer: {
    alignItems: "flex-start",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    lineHeight: 28,
  },
});

export default CustomHeader;
