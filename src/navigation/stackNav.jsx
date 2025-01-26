
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './bottomNav.jsx';
import skinDetailsScreen from '../screens/skinDetailsScreen.jsx';


const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screenOptions: {
        headerStyle: {
            backgroundColor: "#E0A1AC",
        },
        headerTintColor: "white",
        contentStyle: {
            backgroundColor:"#FFF4F4"
        }
    },
    screens: {
        Home: {
            screen: BottomNav,
            options: {
                title: 'Skincare Builder',
            },
            
        },
        skinDetails: {
            screen: skinDetailsScreen,
            options: {
                title: 'Skincare Details',
                headerShown : false
            },
            
        },
    },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
