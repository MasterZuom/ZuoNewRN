
import React, {Component, useState, useEffect} from 'react';
import { View,Text,Image,Dimensions,TouchableOpacity,StyleSheet } from 'react-native';
import MainRouters from './Common/Routers';
import { Provider } from 'react-redux';
import store from '../config/dva';

const Main = ()=>{
    return (
        <Provider store={store}>
            <MainRouters/>
        </Provider>
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

export default Main;