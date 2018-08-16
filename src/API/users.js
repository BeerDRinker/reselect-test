import { API } from './axiosinstance'

export const getUsers = () => API.get().then(res => res.data.results)