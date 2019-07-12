import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import { View } from "react-native";

const TabNavigation = createBottomTabNavigator({
    Home,
    Search,
    Add: { screen: View },
    Notifications,
    Profile
});

export default createAppContainer(TabNavigation);
