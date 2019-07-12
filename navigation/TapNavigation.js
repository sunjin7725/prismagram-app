import {
    createBottomTabNavigator,
    createStackNavigator
} from "react-navigation";
import React from "react";
import Home from "../screens/Tabs/Home";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import Search from "../screens/Tabs/Search";
import { View, Text } from "react-native";
import MessageLink from "../components/MessagesLink";

const stackFactory = (initialRoute, customConfig) =>
    createStackNavigator({
        initialRoute: {
            screen: initialRoute,
            navigationOptions: { ...customConfig }
        }
    });

export default createBottomTabNavigator({
    Home: {
        screen: stackFactory(Home, {
            title: "Home",
            headerRight: <MessageLink />
        })
    },
    Search: {
        screen: stackFactory(Search, {
            title: "Search"
        })
    },
    Add: {
        screen: View,
        navigationOptions: {
            tabBarOnPress: ({ navigation }) => {
                navigation.navigate("PhotoNavigation");
            }
        }
    },
    Notifications: {
        screen: stackFactory(Notifications, {
            title: "Notifications"
        })
    },
    Profile: {
        screen: stackFactory(Profile, {
            title: "Profile"
        })
    }
});
