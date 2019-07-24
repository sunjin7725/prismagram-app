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
        Take: {
            screen: TakePhoto,
            navigationOptions: {
                tabBarLabel: "Take"
            }
        },
        Select: {
            screen: SelectPhoto,
            navigationOptions: {
                tabBarLabel: "Select"
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
                title: "Choose Photo"
            }
        },
        UploadPhoto
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                ...stackStyles
            }
        }
    }
);
