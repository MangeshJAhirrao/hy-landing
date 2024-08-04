import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EventScreen from "./src/screens/EventScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AboutUsScreen from "./src/screens/AboutUsScreen";
import NewsScreen from "./src/screens/NewsScreen";
import CustomHeader from "./components/CustomHeader";
import { View, Image, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const logoImage = require("./assets/13.png"); // Replace with your logo path

const Drawer = createDrawerNavigator();
const APP_BACKGROUND_COLOR = "white";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image source={logoImage} style={styles.logo} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: APP_BACKGROUND_COLOR }}>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={({ navigation }) => ({
            header: (props) => (
              <CustomHeader
                {...props}
                backgroundColor={APP_BACKGROUND_COLOR}
                navigation={navigation}
              />
            ),
            drawerLabelStyle: {
              color: "black",
              fontSize: 18, // Increase font size
              fontWeight: "bold",
            },
            drawerItemStyle: {
              padding: 10, // Add padding to drawer items
              marginVertical: 5, // Add vertical margin
            },
            drawerStyle: {
              backgroundColor: APP_BACKGROUND_COLOR,
              width: 280, // Increase drawer width
            },
          })}
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerLabel: "Home",
            }}
          />
          <Drawer.Screen name="Sankalp Login" component={LoginScreen} />
          <Drawer.Screen name="About Us" component={AboutUsScreen} />
          <Drawer.Screen name="News" component={NewsScreen} />
          <Drawer.Screen name="Event" component={EventScreen} />
        </Drawer.Navigator>
      </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  drawerHeader: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});
