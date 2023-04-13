
import * as axios from 'axios'
import { storage } from './webStorage'
import { AUTH_SESSION_KEY } from 'src/constants/constants'

const controller = new AbortController()

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
})

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      controller.abort()
      // handle error here
    }
    return Promise.reject(error)
  },
)

axiosClient.interceptors.request.use(
  (request) => {
    const session = storage.load(AUTH_SESSION_KEY)
    if (session) {
      request.headers = {
        ...request.headers,
        Authorization: `Bearer ${session?.accessToken}`,
      }
    }

    return {
      ...request,
      signal: controller.signal,
    }
  },
  (error) => Promise.reject(error),
)
