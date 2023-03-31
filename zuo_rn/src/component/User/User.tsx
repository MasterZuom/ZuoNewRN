/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {useLayoutEffect, useEffect} from 'react';
import { View,Text,Image, TouchableOpacity, StyleSheet } from 'react-native';


const User = ({ navigation }: any)=> {
    const {setOptions} = navigation

    useLayoutEffect(()=>{
        console.log('123123');
        
        setOptions({
            headerTitle: '我的',
            gestureEnabled: true
        })
    })

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touch} onPress={()=>{ 
                navigation.navigate('Part',{'isYiBao': 2021314})
            }}>
                <Text> 进入设置 </Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    touch:{
        marginTop: 200,
        alignItems: 'center'
    }
})

export default User


