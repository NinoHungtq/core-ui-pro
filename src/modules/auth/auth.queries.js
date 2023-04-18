import { useMutation } from 'react-query'
import { onLogin } from 'src/services/auth/auth.service'

export const useLogin = () => {
  return useMutation((payload) => onLogin(payload))
}
