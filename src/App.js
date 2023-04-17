import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/ErrorFallback'
import { LoginPage } from './pages/AuthPage'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages

// Pages
const Register = React.lazy(() => import('./pages/Register'))
const Page404 = React.lazy(() => import('./pages/Page404'))
const Page500 = React.lazy(() => import('./pages/Page500'))

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={loading}>
        <Routes>
          <Route exact path="/login" name="Login Page" element={<LoginPage />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}
