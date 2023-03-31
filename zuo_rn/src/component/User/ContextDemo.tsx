/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {useEffect, useState} from 'react';
import { View,Text,Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import Wedge from '../Common/Wedge';

export const Context = React.createContext("怡")


const ContextDemo = ({ navigation }: any)=> {
    
    const [color, setColor] = useState('red')

    // 组件挂载成功 和 卸载时候调用
    useEffect(()=>{
        
        console.log("挂载完成");
        
    },[])

    return (
        
        <Context.Provider value={color}>
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
                <Children/>
                <TouchableOpacity onPress={()=>{setColor('blue')}}>
                    <Text>点我换色</Text>
                </TouchableOpacity>
            </View>
        </Context.Provider>
    )
}


class Children extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        // Children.contextType = Context;

    }

    render(){
        return(
            <View style={{width:100,height:100,justifyContent: 'center',alignItems: 'center'}}>
                <Grandson1/>
                <Grandson2/>
            </View>
        )
    }
}


// 用法1
class Grandson1 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};

        Grandson1.contextType = Context;

    }

    render(){
        return(
            <Text style={{color: this.context}}>第一种方式</Text>
        )
    }
}


// 用法2
class Grandson2 extends React.Component {

    render(){
        return(
            <Context.Consumer>
                {
                    (params) => {
                        return(
                            <Text style={{color: params}}>第二种方式</Text>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
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

export default ContextDemo


