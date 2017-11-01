import axios from 'axios';
const baseUrl = 'http://192.168.11.169:8888';

//登陆获取用户信息
export const postLogin = params => {
  console.log(params)
  console.log(1);
  //return axios.post(`${baseUrl}/login`, params).then(res => res.data);
  return axios.get(`${baseUrl}/getlogin`, params).then(res => res.data);
}

export const getUserList = params => {
  return axios.get(`${baseUrl}/user/list`, {params: params});
}