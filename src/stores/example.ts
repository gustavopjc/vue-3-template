import { defineStore } from 'pinia'

export const useClinicaStore = defineStore('clinica', {
 state: () => ({ 
  data: '',
 }),
 getters: {
   getData: (state) => state.data,
 },
 actions: {
  setData(data: string) {
   this.data = data
  }
 }
})