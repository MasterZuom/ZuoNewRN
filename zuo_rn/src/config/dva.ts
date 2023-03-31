import models from '../model/index';
import {create, Model} from 'dva-core';

// 1.创建实例
const app = create();

// 2.加载model对象
models.forEach(model => {
    app.model(model);
})

// 3.启动dva
app.start();

// 4.导出 dva 数据
export default app._store;
