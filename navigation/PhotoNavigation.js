import {
    createMaterialTopTabNavigator,
    createStackNavigator
} from "react-navigation";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import { stackStyles } from "./config";

const PhotoTabs = createMaterialTopTabNavigator(
    {
        Select: {
            screen: SelectPhoto
        },
        Take: {
            screen: TakePhoto
        }
    },
    {
        tabBarPosition: "bottom"
    }
);

export default createStackNavigator(
    {
        PhotoTabs,
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
