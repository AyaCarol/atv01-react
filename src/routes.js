import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/home';
import Calculadora from './pages/calculadora';
import Validador from './pages/validador-idade';

import {Entypo, Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function routes(){
    return(
        <Tab.Navigator>

            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="home" size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen 
                name="Calculadora" 
                component={Calculadora}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="calculator" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Validador"
                component={Validador}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="calendar" size={size} color={color}/>
                    )
                }}
            />
        
        </Tab.Navigator>
    )
}