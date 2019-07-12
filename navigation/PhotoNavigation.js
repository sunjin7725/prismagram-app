import {
    createMaterialTopTabNavigator,
    createStackNavigator
} from "react-navigation";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";

const PhotoTabs = createMaterialTopTabNavigator(
    {
        SelectPhoto,
        TakePhoto
    },
    {
        tabBarPosition: "bottom"
    }
);

export default createStackNavigator({
    PhotoTabs,
    UploadPhoto
});
