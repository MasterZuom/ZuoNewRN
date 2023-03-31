/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View,Text,requireNativeComponent, ViewStyle,Button } from 'react-native';
import { connect } from 'react-redux';

interface IProps {
    style?: ViewStyle
}

// const MyDemo = requireNativeComponent<IProps>('MyDemoView');

const Room = (props: any) => {

    const {count} = props.index

    const onPressLearnMore = (count1: number)=>{
        
        props.dispatch({ count1: count1, count2: count, type: 'index/edit' });

        let a = 3;
        if(true){
            let a = 5;
        }
        alert(a);
    }

    return (
        <View style={{justifyContent:'center',alignItems:'center',flex: 1}}>
            <Text style={{color: '#000'}}>张怡</Text>
            <Button
                onPress={()=> onPressLearnMore(3)}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            {/* <MyDemo style={{width: 200, height: 200,marginTop: 30}}/> */}
        </View>
    )
};


export default connect((state: object)=>{
    return {...state}
})(Room)



