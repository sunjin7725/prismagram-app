import {
    createBottomTabNavigator,
    createStackNavigator
} from "react-navigation";
import { Platform } from "react-native";
import React from "react";
import Home from "../screens/Tabs/Home";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import Search from "../screens/Tabs/Search";
import { View } from "react-native";
import MessageLink from "../components/MessagesLink";
import NavIcon from "../components/NavIcon";
import { stackStyles } from "./config";

const stackFactory = (initialRoute, customConfig) =>
    createStackNavigator({
        initialRoute: {
            screen: initialRoute,
            navigationOptions: {
                ...customConfig,
                headerStyle: { ...stackStyles }
            }
        }
    });

export default createBottomTabNavigator(
    {
        Home: {
            screen: stackFactory(Home, {
                headerLeft: <View />,
                headerRight: <MessageLink />,
                headerTitle: (
                    <View style={{ alignItems: "center", flex: 1 }}>
                        <NavIcon
                            name="logo-instagram"
                            size={36}
                            style={{ alignSelf: "center" }}
                        />
                    </View>
                )
            }),
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <NavIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-home" : "md-home"}
                    />
                )
            }
        },
        Search: {
            screen: stackFactory(Search, {
                title: "Search"
            }),
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <NavIcon
                        focused={focused}
                        name={
                            Platform.OS === "ios" ? "ios-search" : "md-search"
                        }
                    />
                )
            }
        },
        Add: {
            screen: View,
            navigationOptions: {
                tabBarOnPress: ({ navigation }) => {
                    navigation.navigate("PhotoNavigation");
                },
                tabBarIcon: ({ focused }) => (
                    <NavIcon
                        focused={focused}
                        size={32}
                        name={
                            Platform.OS === "ios"
                                ? "ios-add-circle-outline"
                                : "md-add-circle-outline"
                        }
                    />
                )
            }
        },
        Notifications: {
            screen: stackFactory(Notifications, {
                title: "Notifications"
            }),
            navigationOptions: {
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
                )
            }
        },
        Profile: {
            screen: stackFactory(Profile, {
                title: "Profile"
            }),
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <NavIcon
                        focused={focused}
                        name={
                            Platform.OS === "ios" ? "ios-person" : "md-person"
                        }
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            initialRouteName: "Search",
            showLabel: false,
            style: {
                backgroundColor: "#FAFAFA"
            }
        }
    }
);
