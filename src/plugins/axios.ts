/* eslint-disable @typescript-eslint/no-extra-semi */
import axios from 'axios'
import router from '@/router'
import authService from '@/services/auth'
import type { InternalAxiosRequestConfig, AxiosHeaders, AxiosResponse } from 'axios'

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  if (authService.isAuthenticated()) {
    ;(config.headers as AxiosHeaders).set('Authorization-Usuario-Clinica', `Bearer ${authService.getToken()}`)
  }
  return config
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response
}

axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.interceptors.request.use(onRequest)
axios.interceptors.response.use(onResponse, error => {
  if (error.response?.status === 401 && router.currentRoute._value.name !== 'login') {
    // Caso seja login médico, apaga o token expirado
    // authService.logout()
    router.push({ name: 'login' })
  }
  console.error(error)
  return Promise.reject(error)
})
