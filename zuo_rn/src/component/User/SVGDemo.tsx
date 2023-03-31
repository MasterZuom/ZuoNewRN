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
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';


const screenW = Dimensions.get('window').width;

const SVGDemo = ({ navigation }: any)=> {
    const {setOptions} = navigation

    const [angel, setAngel] = useState(0)

    useLayoutEffect(()=>{
        console.log('123123');
        
    })

    const endX1 = 110+100*Math.cos(angel*Math.PI)
    const endY1 = 110-100*Math.sin(angel*Math.PI)

    const endX2 = 110+100*Math.cos(0*Math.PI)
    const endY2 = 110-100*Math.sin(0*Math.PI)

    return (
        <View style={styles.container}>
            <View style={[{alignItems: 'center', justifyContent: 'center' },]}>
                <Svg height="300" width="100%">
                    <Path 
                        d={`M10 110 A100 100, 1, 0, 1, ${endX1}, ${endY1}`} 
                        fill="transparent" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        stroke="green"
                    />
                    <Path 
                        d={`M10 110 A100 100, 1, 0, 1, ${endX2}, ${endY2}`} 
                        fill="transparent" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        stroke="rgba(0,0,0,0.1)"
                    />
                </Svg>
                <Text style={{position: 'absolute', top: 100, left: 100}}>28</Text>
            </View>
            <TouchableOpacity style={{marginLeft:20 ,padding: 10}} onPress={()=>{
                setAngel(angel - 0.05)
            }}>
                <Text>黄黄黄</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:20 ,padding: 10}} onPress={()=>{
                setAngel(angel + 0.05)
            }}>
                <Text>晰晰晰</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    
})

export default SVGDemo


