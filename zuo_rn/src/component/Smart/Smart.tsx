/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {useEffect, useState} from 'react';
import { View,Text,requireNativeComponent,ViewStyle, UIManager, findNodeHandle,NativeModules } from 'react-native';

interface IProps {
    style?: ViewStyle
}

const INdicatorView = requireNativeComponent<IProps>('MyRNIndicatorView');
const INdicatorManager = NativeModules.MyRNIndicatorView;


const Smart = ({ navigation }: any) => {

    let indicator: any = ''

    useEffect(()=>{
        console.log('sss  ');
    })

    useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', e => {
            // Prevent default behavior
            e.preventDefault();
      
            // Do something manually
            navigation.navigate('Smart')
            console.log('123123');
            INdicatorManager.begin()
            // begin()
        });
      
        return unsubscribe;
    }, [navigation]);


    const callNative = (name: string, args: Array<any> = []) => {
        const commandId = (UIManager as any).INdicatorView.Commands[name];
        
        (UIManager as any).dispatchViewManagerCommand(findNodeHandle(indicator),commandId,args)
    }

    const begin = ()=>{
        indicator && callNative('begin')
    }

    return (
        <View style={{justifyContent:'center',alignItems:'center',flex: 1}}>
            <INdicatorView
                ref = {e => indicator = e}
                style={{width:'100%',height:'100%'}}
            />
        </View>
    )
};

export default Smart;



