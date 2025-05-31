import { defineStore } from "pinia";
import {ref} from 'vue'


export const useViewStore = defineStore('view', () => {
  const getPrevStyle = ref<() => void>()
  const getNextStyle = ref<() => void>()

  return { getPrevStyle, getNextStyle }
}, {persist: true,})
