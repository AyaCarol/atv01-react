import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/home';
import Calculadora from './pages/calculadora';
import Validador from './pages/validador-idade';
import Login from './pages/login';
import Info from './pages/infos';
import Theme from './pages/dark-mode'

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
                        <Feather name="calendar" size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen
                name="Tema"
                component={Theme}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Feather name="moon" size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Feather name="user" size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen
                name="Info"
                component={Info}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="info" size={size} color={color}/>
                    )
                }}
            />
        
        </Tab.Navigator>
    )
}