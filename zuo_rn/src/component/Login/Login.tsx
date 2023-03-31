/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import { View,Text,Image,Dimensions,TouchableOpacity } from 'react-native';

const screenW = Dimensions.get('screen').width;
const screenH = Dimensions.get('screen').height

function HomeScreen({ navigation }: any) {

    const [count, setCount] = useState(0)
    const {setOptions} = navigation

    useEffect(()=>{
        console.log('sss  ' + screenW);
        console.log('sss  ' + screenH);
    })
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{width:150,height:150,resizeMode:'contain'}}  source={require('../../images/login/login_logo.png')}/>
            <TouchableOpacity onPress={()=>{ navigation.navigate('Part') }}>
                <Text>进入</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen


