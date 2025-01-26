import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { verifyInstallation } from 'nativewind';
import HomeScreen from "../screens/homeScreen";
import homeIcon from '../images/home.png'
import profileIcon from '../images/user.png'
import chatIcon from '../images/robot.png'
import scanIcon from '../images/scanner.png'
import skinIcon from '../images/skincare.png'
import { Image } from "react-native";
const Tab = createBottomTabNavigator();

export default function BottomNav() {

    return (


        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: '#fff',
            }}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#E0A1AC',
                    borderTopWidth: 0,
                    elevation: 5,
                },
                tabBarActiveTintColor: "black",
                tabBarActiveBackgroundColor: "white",
                tabBarInactiveTintColor : "black"
            }}
        >
           
            
            <Tab.Screen
                name="ProfileScreen"
                component={() => {
                    return (
                        <Text>Profile Screen</Text>
                    )
                }}
                
                options={{
                    title: "",
                    tabBarIcon: () => <Image
                        source={profileIcon}
                        style={{ width: 30, height: 30 }}
                    />
                }}
            />
            <Tab.Screen
                name="chat"
                component={() => {
                    return (
                        <Text>chat Screen</Text>
                    )
                }}
                options={{
                    title: "",
                    tabBarIcon: () => <Image
                        source={chatIcon}
                        style={{ width: 30, height: 30 }}
                    />,
                }}
            />
            <Tab.Screen
                name="Home"
                component={() => {
                    return (
                        <Text>Home Screen</Text>
                    )
                }}

                options={{
                    gestureEnabled: false,
                    title: "",
                    tabBarIcon: () => <Image
                        source={homeIcon}
                        style={{ width: 30, height: 30 }}
                    />

                }}
            />
            <Tab.Screen
                name="skin"
                component={HomeScreen}
                options={{
                    title: "",
                    tabBarIcon: () => <Image
                        source={skinIcon}
                        style={{ width: 30, height: 30 }}
                    />
                }}
            />
            
            <Tab.Screen
                name="chast"
                component={() => {
                    return (
                        <Text>scan Screen</Text>
                    )
                }}
                options={{
                    title: "",
                    tabBarIcon: () => <Image
                        source={scanIcon}
                        style={{ width: 30, height: 30 }}
                    />
                }}
            />
        </Tab.Navigator>



    );
}