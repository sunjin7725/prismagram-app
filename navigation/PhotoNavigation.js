import {
    createMaterialTopTabNavigator,
    createStackNavigator
} from "react-navigation";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import { stackStyles } from "./config";
import styles from "../styles";

const PhotoTabs = createMaterialTopTabNavigator(
    {
        Select: {
            screen: SelectPhoto,
            navigationOptions: {
                tabBarLabel: "Select"
            }
        },
        Take: {
            screen: TakePhoto,
            navigationOptions: {
                tabBarLabel: "Take"
            }
        }
    },
    {
        tabBarPosition: "bottom",
        tabBarOptions: {
            indicatorStyle: {
                backgroundColor: styles.blackColor
            },
            labelStyle: {
                color: styles.blackColor,
                fontWeight: "600"
            },
            style: {
                ...stackStyles
            }
        }
    }
);

export default createStackNavigator(
    {
        Tabs: {
            screen: PhotoTabs,
            navigationOptions: {
                title: "Choose Photo",
                headerBackTitle: null
            }
        },
        Upload: {
            screen: UploadPhoto,
            navigationOptions: {
                title: "Upload"
            }
        }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                ...stackStyles
            }
        },
        headerTintColor: styles.blackColor
    }
);
