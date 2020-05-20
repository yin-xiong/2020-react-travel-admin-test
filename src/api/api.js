import ajax from './ajax';
// 登录接口
export const login = (data)=> ajax('/Api/admin/auth/login',data,'POST');
