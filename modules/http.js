import axios from 'axios'
import { isError } from 'lodash'
const base = import.meta.env.VITE_BASE_URL

export const getData = async(path) => {
    try {
        const res = await axios.get(base + path)
        return res
    } catch (e) {
        alert('Network error')
    }
}
export const postData = async(path, body) => {
    try {
        const res = await axios.post(base + path, body)
        return res
    } catch (e) {
        alert('Network error')
    }
}
export const patchData = async(path, body) => {
    try {
        const res = await axios.patch(base + path, body)
        return res
    } catch (e) {
        alert('Network error')
    }
}
export const deleteData = async(path) => {
    try {
        const res = await axios.delete(base + path)
        if(res.status === 200 || res.status === 201) {
            return res.data
        }
    } catch (e) {
        alert(e.message)
        return e
    }
}



