/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import { View,Text,Image, TouchableOpacity, StyleSheet } from 'react-native';

function Part({ navigation,route }: any) {

    const [count, setCount] = useState(0)
    const {setOptions} = navigation
    const isYiBao = route.params?.isYiBao

    // 组件挂载成功 和 卸载时候调用
    useEffect(()=>{
        setOptions({
            title: '功能列表',
            // presentation: 'modal'
        })

        console.log("挂载完成");
        return ()=>{
            console.log("即将卸载");
        }
    },[])

    // 当组件更新时调用
    useEffect(()=>{
        console.log("组件更新");
    })

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
                setOptions({
                    title: '功能列表2222',
                    // presentation: 'modal'
                })
                //navigation.navigate('ARTPage')
            }}>
                <Text>ART 绘图 Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 20}} onPress={()=>{
                navigation.navigate('ContextDemo')
            }}>
                <Text>关于 上下文</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 20}} onPress={()=>{
                navigation.navigate('SVGDemo')
            }}>
                <Text>SVG Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 20}} onPress={()=>{
                navigation.navigate('SwiperDemo')
            }}>
                <Text>轮播图</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Part


