// https://blog.csdn.net/qq_66180056/article/details/127428035
// 第一步：在src下创建一个http文件夹，创建一个config的js文件！
// 作用是：抛出基础请求方式、基础前缀、请求头信息、参数、超时时间、凭证、后端接口返回数据类型！
export default {
  method: 'get',
  // 基础url前缀
  baseUrl: process.env.BASE_URL,
  // 请求头信息
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: true,
  // 返回值数据类型
  responseType: 'json',
}
