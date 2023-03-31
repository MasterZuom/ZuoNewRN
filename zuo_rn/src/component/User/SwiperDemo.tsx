/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {useLayoutEffect, useEffect, useState} from 'react';
import { View, TouchableOpacity, StyleSheet,Dimensions,ScrollView,Text } from 'react-native';
// import SwiperFlatList from 'react-native-swiper-flatlist';
// import Swiper from 'react-native-swiper';

import EZSwiper from 'react-native-ezswiper';


const screenW = Dimensions.get('window').width;

const SwiperDemo = ({ navigation }: any)=> {
    const {setOptions} = navigation

    const [angel, setAngel] = useState(0)

    useLayoutEffect(()=>{
        console.log('123123');
        
    })

    const colors = ['red','blue','yellow','pink','green']

    return (
        <View style={styles.container}>
            <EZSwiper style={{width: 300,height: 150,backgroundColor: 'white'}}
                dataSource={['0', '1' ,'2','3']}
                width={ 300 }
                height={150 }
                loop={true}
                autoplayDirection={true}
                autoplayTimeout={2}
                horizontal={true}
                renderRow={(value,index)=>{
                    return(
                        <View style={{width:'100%',backgroundColor:colors[index],height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Text>{index}</Text>
                        </View>
                    )
                }}          
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center'
    },
    
})

export default SwiperDemo


