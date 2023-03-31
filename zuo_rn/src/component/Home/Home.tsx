/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import { View,Text,Image,Dimensions,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { any } from 'prop-types';


const screenW = Dimensions.get('screen').width;
const screenH = Dimensions.get('screen').height

interface ResObj {
    data: object
}

function HomeScreen(props: any) {

    const {setOptions} = props.navigation
    const {count} = props.index

    useEffect(()=>{
        console.log('sss  ' + screenW);
        console.log('sss  ' + screenH);

        //requestAPI()
        postRequestAPI()

        // post().then((data)=>{
        //     return data
        // }).then((data)=>{
        //     return post()
        // }).then((data)=>{
        //     alert(data)
        // })

        setOptions({
            title: '首页'
        })

    },[])

    function post(){
        return new Promise(function(resolve, reject){
            setTimeout(() => {
                resolve('123123')
                
            }, 2000);
        })
    }

    const requestAPI = ()=>{
        
        let url = 'https://webstatic.mihoyo.com/hk4e/event/e20190909gacha/index.html?authkey_ver=1&sign_type=2&auth_appid=webview_gacha&init_type=301&gacha_id=4ae078b55a1609b395ec8119ac842395292580&timestamp=1630453186&lang=zh-cn&device_type=mobile&ext=%7b%22loc%22%3a%7b%22x%22%3a2266.044921875%2c%22y%22%3a216.886962890625%2c%22z%22%3a-888.724365234375%7d%2c%22platform%22%3a%22Android%22%7d&game_version=CNRELAndroid2.1.0_R4325476_S4282242_D4302397&region=cn_gf01&authkey=lKguOMUOd3MxFDB7QR6ZrL1Wo8ABm2DNEUS%2foL5pPhBAY9tcw686%2bOeSY%2biT8LGGHoHOugjzU9lGY9i8VzjaWE2otKeINEodniSd2QoRWlaGZw11Sj9fW9A3oo2H4gC1IDqAQJXtQg5A%2bMxmhJfE1%2fxpBFaR5EmKriHZw2txs8NKv8wQLRmxd1m%2f%2fVVSL873vopk96YOeOHrCoXypr9EfdLtsd1jp%2bvrRW0eNLLYMSwij%2bWo13pMhgTw8XA6HnVxIhf%2bjdKEjWkFYbq3xgnKyaxajRikEjZs%2fYCL2ep29vJZws6ovMupF1V7no2RwhIsnkQeLzgRDzJb5a1xBxd%2bl7qLCOvmcOyCcAv97bhrsKeieFk9F6J87KHaAicEVKQN55ap4cE3%2bHI1P1%2buiWtPTH3QQoiehEZ7VrP5B9Pu381N2S1HJByYkOVCjs3T8ZXFMgmzFj4dmzdeEBiZoL7oADNEn6dcLtJ4WuM6qhM%2f9XX6Q83AvhrZ8MqHov6iXZrGZ%2b6dLCXlFseePbSAhtKlEhz1gn1z1pSrloE2RPNpOOxIPR9kQoTSOcuv7G0ISoMudCQnFBd1fJRDohsLmrd8wMCSo3r7fUH6dRgi7NtLwcBWTLuXWhZTxinY80LLQ8f3Ia%2bAMX4CMAqaLV7RZOxfiGBqOct0hmWUBbRRX3T19%2bYuvFG%2fEYjuAlZWiBqyao4mPEz0GjWhWqSazK3mwYzdQYEYR8II%2fD2o2%2f4j16z%2bsCXuvfqtNDqJyZxtgOqeUyaDFe9WGiTktGkYu733otxIeu8vh0icH1eiI1Vc4ce3JgpjslW%2f6k7T3JHWiKPawnAx4%2f7WKORnu9AWQ%2fwVxayGfDgR0uSj9MrblTx9hB95hHo1B1BKX0hNORxCwFtKcwZOehR73OoIjnBKa6%2boZBjwzNHobnfa5rRJDqbJfdXj%2fKNufGKkOqLKP3MsgG1OfgdIXIUNXKT05SemgK1rpsABc4LRQTZkyPTr0iiTqnknSXsjh%2brKjnwP0W7zTD4Jk4EiEwh%2bvdD9El9etDjXNWxfetB8XfM9OdJobPtaKRkGnVS%2fY2pPt5lj1ao%2bsa2yGFLUv9qhn89VFQOccXQsizH9Xl0LiUIGFDeQpOM8gqea4SsNwg6ldUluJFbiRWOuAhkGIaMZguXlGbNG7O6PH0kkpr%2b6pRqLyKXOfrhYiXwCThn%2bNEv9bHkb0ofM4wdL8lrsM6zsNG%2btWnu7DJROi7BLWad1OGBacBpi%2bIQ7Rr6cQC3n1o5bONBShEYTChtmCCUJD%2b5Rl6GOHo1V0VNjzqwT5AGgjHUZknnkf%2fBeerIBZqWu%2b9r%2frQsbDJ6km93PY0pPYLPKBGW2t0jzK%2fFFmJ8Cow%3d%3d&game_biz=hk4e_cn#/log'
        // 请求具有给定ID的用户
        axios.get(url)
        .then(function (response: any) {
            // handle success
            console.log(response.data);
            // add(1)
        })
        .catch(function (error: any) {
            // handle error
            console.log(error);
        })
    }

    const postRequestAPI = ()=> {
        let url = 'https://webstatic.mihoyo.com/hk4e/event/e20190909gacha/index.html?authkey_ver=1&sign_type=2&auth_appid=webview_gacha&init_type=301&gacha_id=4ae078b55a1609b395ec8119ac842395292580&timestamp=1630453186&lang=zh-cn&device_type=mobile&ext=%7b%22loc%22%3a%7b%22x%22%3a2266.044921875%2c%22y%22%3a216.886962890625%2c%22z%22%3a-888.724365234375%7d%2c%22platform%22%3a%22Android%22%7d&game_version=CNRELAndroid2.1.0_R4325476_S4282242_D4302397&region=cn_gf01&authkey=lKguOMUOd3MxFDB7QR6ZrL1Wo8ABm2DNEUS%2foL5pPhBAY9tcw686%2bOeSY%2biT8LGGHoHOugjzU9lGY9i8VzjaWE2otKeINEodniSd2QoRWlaGZw11Sj9fW9A3oo2H4gC1IDqAQJXtQg5A%2bMxmhJfE1%2fxpBFaR5EmKriHZw2txs8NKv8wQLRmxd1m%2f%2fVVSL873vopk96YOeOHrCoXypr9EfdLtsd1jp%2bvrRW0eNLLYMSwij%2bWo13pMhgTw8XA6HnVxIhf%2bjdKEjWkFYbq3xgnKyaxajRikEjZs%2fYCL2ep29vJZws6ovMupF1V7no2RwhIsnkQeLzgRDzJb5a1xBxd%2bl7qLCOvmcOyCcAv97bhrsKeieFk9F6J87KHaAicEVKQN55ap4cE3%2bHI1P1%2buiWtPTH3QQoiehEZ7VrP5B9Pu381N2S1HJByYkOVCjs3T8ZXFMgmzFj4dmzdeEBiZoL7oADNEn6dcLtJ4WuM6qhM%2f9XX6Q83AvhrZ8MqHov6iXZrGZ%2b6dLCXlFseePbSAhtKlEhz1gn1z1pSrloE2RPNpOOxIPR9kQoTSOcuv7G0ISoMudCQnFBd1fJRDohsLmrd8wMCSo3r7fUH6dRgi7NtLwcBWTLuXWhZTxinY80LLQ8f3Ia%2bAMX4CMAqaLV7RZOxfiGBqOct0hmWUBbRRX3T19%2bYuvFG%2fEYjuAlZWiBqyao4mPEz0GjWhWqSazK3mwYzdQYEYR8II%2fD2o2%2f4j16z%2bsCXuvfqtNDqJyZxtgOqeUyaDFe9WGiTktGkYu733otxIeu8vh0icH1eiI1Vc4ce3JgpjslW%2f6k7T3JHWiKPawnAx4%2f7WKORnu9AWQ%2fwVxayGfDgR0uSj9MrblTx9hB95hHo1B1BKX0hNORxCwFtKcwZOehR73OoIjnBKa6%2boZBjwzNHobnfa5rRJDqbJfdXj%2fKNufGKkOqLKP3MsgG1OfgdIXIUNXKT05SemgK1rpsABc4LRQTZkyPTr0iiTqnknSXsjh%2brKjnwP0W7zTD4Jk4EiEwh%2bvdD9El9etDjXNWxfetB8XfM9OdJobPtaKRkGnVS%2fY2pPt5lj1ao%2bsa2yGFLUv9qhn89VFQOccXQsizH9Xl0LiUIGFDeQpOM8gqea4SsNwg6ldUluJFbiRWOuAhkGIaMZguXlGbNG7O6PH0kkpr%2b6pRqLyKXOfrhYiXwCThn%2bNEv9bHkb0ofM4wdL8lrsM6zsNG%2btWnu7DJROi7BLWad1OGBacBpi%2bIQ7Rr6cQC3n1o5bONBShEYTChtmCCUJD%2b5Rl6GOHo1V0VNjzqwT5AGgjHUZknnkf%2fBeerIBZqWu%2b9r%2frQsbDJ6km93PY0pPYLPKBGW2t0jzK%2fFFmJ8Cow%3d%3d&game_biz=hk4e_cn#/log'
        url = 'https://hk4e-api.mihoyo.com/event/gacha_info/api/getGachaLog?authkey_ver=1&sign_type=2&auth_appid=webview_gacha&init_type=301&gacha_id=4ae078b55a1609b395ec8119ac842395292580&timestamp=1630453186&lang=zh-cn&device_type=mobile&ext=%7b%22loc%22%3a%7b%22x%22%3a2266.044921875%2c%22y%22%3a216.886962890625%2c%22z%22%3a-888.724365234375%7d%2c%22platform%22%3a%22Android%22%7d&game_version=CNRELAndroid2.1.0_R4325476_S4282242_D4302397&region=cn_gf01&authkey=lKguOMUOd3MxFDB7QR6ZrL1Wo8ABm2DNEUS%2foL5pPhBAY9tcw686%2bOeSY%2biT8LGGHoHOugjzU9lGY9i8VzjaWE2otKeINEodniSd2QoRWlaGZw11Sj9fW9A3oo2H4gC1IDqAQJXtQg5A%2bMxmhJfE1%2fxpBFaR5EmKriHZw2txs8NKv8wQLRmxd1m%2f%2fVVSL873vopk96YOeOHrCoXypr9EfdLtsd1jp%2bvrRW0eNLLYMSwij%2bWo13pMhgTw8XA6HnVxIhf%2bjdKEjWkFYbq3xgnKyaxajRikEjZs%2fYCL2ep29vJZws6ovMupF1V7no2RwhIsnkQeLzgRDzJb5a1xBxd%2bl7qLCOvmcOyCcAv97bhrsKeieFk9F6J87KHaAicEVKQN55ap4cE3%2bHI1P1%2buiWtPTH3QQoiehEZ7VrP5B9Pu381N2S1HJByYkOVCjs3T8ZXFMgmzFj4dmzdeEBiZoL7oADNEn6dcLtJ4WuM6qhM%2f9XX6Q83AvhrZ8MqHov6iXZrGZ%2b6dLCXlFseePbSAhtKlEhz1gn1z1pSrloE2RPNpOOxIPR9kQoTSOcuv7G0ISoMudCQnFBd1fJRDohsLmrd8wMCSo3r7fUH6dRgi7NtLwcBWTLuXWhZTxinY80LLQ8f3Ia%2bAMX4CMAqaLV7RZOxfiGBqOct0hmWUBbRRX3T19%2bYuvFG%2fEYjuAlZWiBqyao4mPEz0GjWhWqSazK3mwYzdQYEYR8II%2fD2o2%2f4j16z%2bsCXuvfqtNDqJyZxtgOqeUyaDFe9WGiTktGkYu733otxIeu8vh0icH1eiI1Vc4ce3JgpjslW%2f6k7T3JHWiKPawnAx4%2f7WKORnu9AWQ%2fwVxayGfDgR0uSj9MrblTx9hB95hHo1B1BKX0hNORxCwFtKcwZOehR73OoIjnBKa6%2boZBjwzNHobnfa5rRJDqbJfdXj%2fKNufGKkOqLKP3MsgG1OfgdIXIUNXKT05SemgK1rpsABc4LRQTZkyPTr0iiTqnknSXsjh%2brKjnwP0W7zTD4Jk4EiEwh%2bvdD9El9etDjXNWxfetB8XfM9OdJobPtaKRkGnVS%2fY2pPt5lj1ao%2bsa2yGFLUv9qhn89VFQOccXQsizH9Xl0LiUIGFDeQpOM8gqea4SsNwg6ldUluJFbiRWOuAhkGIaMZguXlGbNG7O6PH0kkpr%2b6pRqLyKXOfrhYiXwCThn%2bNEv9bHkb0ofM4wdL8lrsM6zsNG%2btWnu7DJROi7BLWad1OGBacBpi%2bIQ7Rr6cQC3n1o5bONBShEYTChtmCCUJD%2b5Rl6GOHo1V0VNjzqwT5AGgjHUZknnkf%2fBeerIBZqWu%2b9r%2frQsbDJ6km93PY0pPYLPKBGW2t0jzK%2fFFmJ8Cow%3d%3d&game_biz=hk4e_cn&gacha_type=301&page=1&size=6&end_id=0'
        axios({
            method: "get",
            url:url,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "text/plain",
            },
            params: {},
        })    
        .then((resp: ResObj) => {
            console.log(resp.data);
        })
        .catch((err : Error) => {
            console.log(err);
           
        });   
    }

    const add = (count: number)=>{
        props.dispatch({
            type: 'index/fetchData',
        });
    }
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{width:150,height:150,resizeMode:'contain'}}  source={require('../../images/login/login_logo.png')}/>
            <Text>{count}</Text>
            <TouchableOpacity onPress={()=>{ 
                add(2)
            }}>
                <Text>进入</Text>
            </TouchableOpacity>
        </View>
    )
}

export default connect((state:object)=>{
    return {...state}
})(HomeScreen)


