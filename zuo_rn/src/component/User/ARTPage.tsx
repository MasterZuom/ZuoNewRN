/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {useLayoutEffect, useEffect} from 'react';
import { View,Text,Image, TouchableOpacity, StyleSheet,Dimensions,ScrollView } from 'react-native';
import {Surface, Shape, ClippingRectangle, Path, Transform} from '@react-native-community/art';
import Wedge from '../Common/Wedge';


const screenW = Dimensions.get('window').width;

const ARTPage = ({ navigation }: any)=> {
    const {setOptions} = navigation

    useLayoutEffect(()=>{
        console.log('123123');
        
    })

    const renderMarks : any = (space: number)=>{
        let centerPointX  = screenW/2
        let centerPointY  = 200

        let rMax = 160
        let rmin = 130

        let length = 180 / space
        let marks = []
        for (let index = 0; index <= length; index++) {
            let angel = -180 + index * space
            marks.push(
                <Shape
                    key = {'marks_'+index}
                    d={new Path().moveTo(centerPointX + rmin, centerPointY).lineTo(centerPointX + rMax , centerPointY)}
                    stroke="blue"
                    strokeWidth={4}
                    transform={new Transform().rotate(angel, centerPointX , centerPointY)}
                    strokeCap="butt"
                />
            )
        }
        return marks
    }


    return (
        <ScrollView style={styles.container}>
            <Surface style={{marginTop: 20, backgroundColor: 'pink'}} width={screenW} height={300}>
                {/* <Shape
                    d={new Path().moveTo(50, 50).lineTo(50, 100).lineTo(100,100)}
                    stroke="black"
                    strokeWidth={5}
                /> */}
                <Shape
                    d={new Path().moveTo(50, 60).arcTo(20, 30, 5)}
                    stroke="black"
                    strokeWidth={5}
                />
            </Surface>

            <Surface style={{marginTop: 20, backgroundColor: 'pink'}} width={screenW} height={300}>
                
                <Shape
                    d={new Path().moveTo(10, 110).arcTo(110+100*Math.cos(0.1*Math.PI),110-100*Math.sin(0.1*Math.PI),100,100)}
                    stroke="black"
                    strokeWidth={20}
                />
            </Surface>

            <Surface width={screenW} height={300} style={{backgroundColor: 'yellow', marginTop: 10}}>
                <Wedge
                    outerRadius={100}
                    innerRadius={90}
                    startAngle={-90}
                    endAngle={0}
                    originX={100}
                    originY={100}
                    fill="red" 
                />
                
            </Surface>

            <Surface width={screenW} height={300} style={{backgroundColor: 'yellow', marginTop: 10}}>
                {renderMarks(6)}
            </Surface>
        </ScrollView>
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

export default ARTPage


