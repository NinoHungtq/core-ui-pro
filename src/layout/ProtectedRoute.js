import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from 'src/hooks/useAuth'

export const ProtectedRoute = ({ children }) => {
  const { isAuthentication } = useAuth()

  if (!isAuthentication) {
    // user is not authenticated
    return <Navigate to="/login" />
  }
  return <>{children}</>
}
