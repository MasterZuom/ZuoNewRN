
import React, {Component, useState, useEffect} from 'react';
import { View,Text,Image,Dimensions,TouchableOpacity,StyleSheet } from 'react-native';

import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../component/Home/Home';
import Room from '../../component/Room/Rome';
import User from '../../component/User/User';
import Smart from '../../component/Smart/Smart';

const homeIcon = require('../../images/bottom_tab/home_inactive.png')
const homeIcon_select = require('../../images/bottom_tab/xiaosa.png')
const roomIcon = require('../../images/bottom_tab/room_inactive.png')
const roomIcon_select = require('../../images/bottom_tab/room_active.png')
const userIcon = require('../../images/bottom_tab/user_inactive.png')
const userIcon_select = require('../../images/bottom_tab/user_active.png')
const smartIcon = require('../../images/bottom_tab/smart_inactive.png')
const smartIcon_select = require('../../images/bottom_tab/smart_active.png')


const Tab = createBottomTabNavigator()
const MainTabs = ({ navigation, route } : {[propName: string] : any}) => {

    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#1E1E1E',
                tabBarInactiveTintColor: '#999999',
                tabBarLabelStyle: {
                    fontSize: 12,
                    bottom: 3
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: ({focused}) => (focused ? null : <Text style={styles.labelInactive}>收藏</Text>), 
                    tabBarIcon: ({focused})=>{
                        return (
                            <Image
                                source={focused ? homeIcon_select : homeIcon}
                                style={focused ? {width:40,height:37,resizeMode:'contain'} : styles.icon}
                            />
                        )
                    },
                    lazy: true
                }}
            />
            <Tab.Screen 
                name="Room" 
                component={Room} 
                options={{
                    tabBarLabel: '房间', 
                    tabBarIcon: ({focused})=>{
                        return (
                            <Image
                                source={focused ? roomIcon_select : roomIcon}
                                style={styles.icon}
                            />
                        )
                    }
                }}
            />
            {/* <Tab.Screen 
                name="Smart" 
                component={Smart}
                options={{
                    tabBarLabel: '智能', 
                    tabBarIcon: ({focused})=>{
                        return (
                            <Image
                                source={focused ? smartIcon_select : smartIcon}
                                style={styles.icon}
                            />
                        )
                    }
                }}
            /> */}
            <Tab.Screen 
                name="User" 
                component={User} 
                options={{
                    tabBarLabel: '我的', 
                    tabBarIcon: ({focused})=>{
                        return (
                            <Image
                                source={focused ? userIcon_select : userIcon}
                                style={styles.icon}
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    labelInactive:{
        fontSize: 12,
        marginTop: 3,
        bottom: 5,
        color: '#999999',
        alignSelf:'center'
    }
});

export default MainTabs;


