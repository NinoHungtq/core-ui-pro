import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AUTH_SESSION_KEY } from 'src/constants/constants'
import { storage } from 'src/libs/web-storage'

export const ProtectedRoute = ({ children }) => {
  const session = storage.load(AUTH_SESSION_KEY)

  if (!session?.token) {
    // user is not authenticated
    return <Navigate to="/login" />
  }
  return (
    <>
      {children}
    </>
  )
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
}
