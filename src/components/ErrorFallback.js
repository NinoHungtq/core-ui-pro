import { CAlert, CButton } from '@coreui/react-pro'
import React from 'react'

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <>
      <CAlert color="danger">
        <p>Something went wrong:</p>
        <pre style={{ color: 'red' }}>{error.message}</pre>

        <div>
          <CButton color="info" onClick={resetErrorBoundary}>
            Try again
          </CButton>
        </div>
      </CAlert>
    </>
  )
}
