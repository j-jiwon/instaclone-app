import "react-native-gesture-handler";
import React from "react";
import { Platform } from "react-native";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Profile from "../screens/Tabs/Profile";
import Search from "../screens/Tabs/Search";
import Notification from "../screens/Tabs/Notifications";
import Detail from "../screens/Detail";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import MessagesLink from "../components/MessagesLink";
import NavIcon from "../components/NavIcon";
import { stackStyles } from "./config";
import SearchBar from "../components/SearchBar";
import styles from "../styles";
import UserDetail from "../screens/UserDetail";

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ height: 35 }}
      resizeMode={"contain"}
      source={require("../assets/instagram-logo.jpg")}
    />
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { ...stackStyles } }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => <MessagesLink />,
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerTintColor: styles.blackColor, title: "Photo" }}
      />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { ...stackStyles } }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerTintColor: styles.blackColor, title: "Photo" }}
      />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
};

const NotificationeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { ...stackStyles } }}>
      <Stack.Screen
        name="Activity"
        component={Notification}
        options={{
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerTintColor: styles.blackColor, title: "Photo" }}
      />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{ headerStyle: { ...stackStyles } }}
    >
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerTintColor: styles.blackColor, title: "Photo" }}
      />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
};

const TabNavigation = createBottomTabNavigator();

export default ({ navigation }) => {
  return (
    <TabNavigation.Navigator style={{ backgroundColor: "#FAFAFA" }}>
      <TabNavigation.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-home" : "md-home"}
            />
          ),
          tabBarLabel: ({ focused }) => false
        }}
      />
      <TabNavigation.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            />
          ),
          tabBarLabel: ({ focused }) => false
        }}
      />

      <TabNavigation.Screen
        name="Add"
        component={View}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              size={32}
              name={"ios-add-circle-outline"}
            />
          ),
          tabBarLabel: ({ focused }) => false
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigation.navigate("PhotoNavigation");
          }
        }}
      />
      <TabNavigation.Screen
        name="Notification"
        component={NotificationeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={
                Platform.OS === "ios"
                  ? focused
                    ? "ios-heart"
                    : "ios-heart-empty"
                  : focused
                  ? "md-heart"
                  : "md-heart-empty"
              }
            />
          ),
          tabBarLabel: ({ focused }) => false
        }}
      />
      <TabNavigation.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-person" : "md-person"}
            />
          ),
          tabBarLabel: ({ focused }) => false
        }}
      />
    </TabNavigation.Navigator>
  );
};
