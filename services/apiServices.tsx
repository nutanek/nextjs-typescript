import axios from 'axios'
import { ApiUsers } from './../models/apiModels'

const ROOT_URL = 'https://reqres.in/api'
const API_USERS = `${ROOT_URL}/users?page=1`

export async function getUsers(): Promise<ApiUsers> {
    const url = API_USERS
    let res = await axios.get(url)
    return res.data
}
