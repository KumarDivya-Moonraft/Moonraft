import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Category from "../screens/Category";
import { Text } from "react-native";
import Details from "../screens/Details";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/DrawerContent";

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Category" component={Category}/>
//                 <Stack.Screen name="Home" component={Home} />
//                 <Stack.Screen name="Details" component={Details} /> 
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

const Drawer= createDrawerNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Category" component={Category}/>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Details" component={Details} /> 
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
