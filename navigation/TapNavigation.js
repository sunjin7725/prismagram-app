import { createBottomTabNavigator } from "react-navigation";
import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import { View } from "react-native";

export default createBottomTabNavigator({
    Home,
    Search,
    Add: {
        screen: View,
        navigationOptions: {
            tabBarOnPress: ({ navigation }) => {
                navigation.navigate("PhotoNavigation");
            }
        }
    },
    Notifications,
    Profile
});
