import { AUTH_SESSION_KEY } from 'src/constants/constants'
import { storage } from 'src/libs/webStorage'
import jwt_decode from 'jwt-decode'
import { useMemo } from 'react'

export const useAuth = () => {
  const session = storage.load(AUTH_SESSION_KEY)
  const accessToken = session?.accessToken || ''
  const currentUser = useMemo(() => (accessToken ? jwt_decode(accessToken) : null), [accessToken])

  return {
    isAuthentication: !!accessToken,
    currentUser,
  }
}
