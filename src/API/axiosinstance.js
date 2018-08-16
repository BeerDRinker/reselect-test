import axios from 'axios'
// import stringify from 'qs/lib/stringify'

import { API_URL } from '../constants'

export const API = axios.create({
  baseURL: API_URL
})