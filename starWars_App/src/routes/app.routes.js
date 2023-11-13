import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes = () => {
    return(
        <Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <Screen name="HomeScreen" component={HomeScreen}/>
        </Navigator>
    )
}

export default AppRoutes;