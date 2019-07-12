import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TapNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";

const MainNavigation = createStackNavigator(
    {
        TabNavigation,
        PhotoNavigation,
        MessageNavigation
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(MainNavigation);
