import { ENDPOINT } from '@constants'
import API from '@libs'

const { post } = API

export const onLogin = (data) => {
  return post(ENDPOINT.AUTH.LOGIN, data)
}
