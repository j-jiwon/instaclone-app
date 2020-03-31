import "react-native-gesture-handler";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { stackStyles } from "./config";

const Tabs = createMaterialTopTabNavigator();

const PhotoTabs = () => {
  return (
    <Tabs.Navigator headerMode="none" tabBarPosition="bottom">
      <Tabs.Screen name="Select" component={SelectPhoto} />
      <Tabs.Screen name="Take" component={TakePhoto} />
    </Tabs.Navigator>
  );
};

const StackTabs = createStackNavigator();

export default () => {
  return (
    <StackTabs.Navigator screenOptions={{ headerStyle: { ...stackStyles } }}>
      <StackTabs.Screen
        options={{ headerShown: false }}
        name="PhotoTabs"
        component={PhotoTabs}
      />
      <StackTabs.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{ title: "" }}
      />
    </StackTabs.Navigator>
  );
};
