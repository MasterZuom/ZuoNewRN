
import React, {Component, useState, useEffect} from 'react';
import { View,Text,Image,Dimensions,TouchableOpacity,StyleSheet } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MainTabs from './MainTabs';

import Part from '../User/Part';
// import ARTPage from '../User/ARTPage';
import ContextDemo from '../User/ContextDemo';
import SVGDemo from '../User/SVGDemo';
// import SwiperDemo from '../User/SwiperDemo';

// Header 标题
function getHeaderTitle(route: any) {
    
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  
    switch (routeName) {
        case 'Home':
            return '首页';
        case 'User':
            return '我的';
        case 'Smart':
            return '智能';
        case 'Room':
            return '房间';
    }
}


//所有栈
const MainStack = createNativeStackNavigator()
const MainStackScreen = ()=>{
    return(
        <MainStack.Navigator>
            <MainStack.Screen name="Main" component={MainTabs}
                options={({route})=>({
                    headerShown: false
                })}
            />
            <MainStack.Screen name="Part" component={Part}/>
            {/* <MainStack.Screen name="ARTPage" component={ARTPage}/> */}
            <MainStack.Screen name="ContextDemo" component={ContextDemo}/>
            <MainStack.Screen name="SVGDemo" component={SVGDemo}/>
            {/* <MainStack.Screen name="SwiperDemo" component={SwiperDemo}/> */}
        </MainStack.Navigator>
    )
}

const MainRouters = ()=>{
    return(
        <NavigationContainer>
            <MainStackScreen/>
        </NavigationContainer>
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

export default MainRouters;