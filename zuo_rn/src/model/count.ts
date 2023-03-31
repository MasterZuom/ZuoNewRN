
import React from 'react';
import {Model, Effect} from 'dva-core';
import axios from 'axios';

const AppVersionUrl = 'https://api-test.hansa-tec.com/api/controller/appVersionCheck'

type CountM = {
    count: number
};
type DvaParams = {
    count1: number,
    count2: number
}

const countModel = {
    namespace: 'index',
    state: { count: 1 },
    reducers: {
        edit(state: CountM, {count1, count2} : DvaParams) {
            state.count = count1 + count2;
            return { ...state };
        },
    },
    effects: {
        *fetchData(_: any, {call, put}: any){
            const {data} = yield call(axios.get, AppVersionUrl)
            yield put({
                type: 'edit',
                count1: data.result.minVersion,
                count2: 10
            })
        } 
    },
};

export default countModel