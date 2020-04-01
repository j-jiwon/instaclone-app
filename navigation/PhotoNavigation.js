import "react-native-gesture-handler";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { stackStyles } from "./config";
import styles from "../styles";

const Tabs = createMaterialTopTabNavigator();

const PhotoTabs = () => {
  return (
    <Tabs.Navigator tabBarPosition="bottom">
      <Tabs.Screen
        name="Library"
        component={SelectPhoto}
        options={{ headerTitle: "Recents" }}
      />
      <Tabs.Screen
        name="Photo"
        component={TakePhoto}
        options={{ headerTitle: "Photo" }}
      />
    </Tabs.Navigator>
  );
};

const StackTabs = createStackNavigator();

export default () => {
  return (
    <StackTabs.Navigator
      screenOptions={{
        headerStyle: { ...stackStyles },
        headerTintColor: styles.blackColor
      }}
    >
      <StackTabs.Screen
        name="PhotoTabs"
        component={PhotoTabs}
        options={{ headerTitle: "Choose Photo", headerBackTitle: "" }}
      />
      <StackTabs.Screen
        name="Upload"
        component={UploadPhoto}
        options={{ headerBackTitle: "" }}
      />
    </StackTabs.Navigator>
  );
};
