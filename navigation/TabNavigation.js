import "react-native-gesture-handler";
import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Profile from "../screens/Tabs/Profile";
import Search from "../screens/Tabs/Search";
import Notification from "../screens/Tabs/Notifications";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesLink from "../components/MessagesLink";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerRight: () => <MessagesLink /> }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const NotificationeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

const TabNavigation = createBottomTabNavigator();

export default ({ navigation }) => {
  return (
    <TabNavigation.Navigator>
      <TabNavigation.Screen name="Home" component={HomeStack} />
      <TabNavigation.Screen name="Profile" component={ProfileStack} />
      <TabNavigation.Screen
        name="Add"
        component={View}
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
      />
      <TabNavigation.Screen name="Search" component={SearchStack} />
    </TabNavigation.Navigator>
  );
};
