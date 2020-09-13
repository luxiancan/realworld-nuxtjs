// 基于 axios 封装的请求模块

import axios from 'axios'

// 创建请求对象
export const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})

// 通过插件机制获取上下文对象 (query, params, req, res, app, store)
export default ({ store }) => {
    // 请求拦截器
    // 任何请求都要经过请求拦截器
    // 我们可以在请求拦截器中做一些公共的业务处理，例如统一设置 token
    // Add a request interceptor
    request.interceptors.request.use(function (config) {
        // Do something before request is sent

        const { user } = store.state
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`;
        }

        // 返回 config 请求配置对象
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // 响应拦截器
}
