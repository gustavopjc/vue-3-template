import Cookies from 'js-cookie'
import axios from 'axios'
import type IAuth from '../models/IAuthUsuarioClinica';


const AuthService = {
  setToken: (token: string) => console.log('set-token', token),
  getToken: () => console.log('set-token'),
  removeToken: () => Cookies.remove('token'),
  isAuthenticated: () => !(Cookies.get('token') == null),
  async login(email: string, senha: string): Promise<IAuth> {
    const response = await axios.post<IAuth>('/login', { email, senha })
    this.setToken(response.data.token)
    return response.data
  },
}

export default AuthService
