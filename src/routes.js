import React from 'react'
const Dashboard = React.lazy(() => import('./pages/Dashboard')) 

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/advertisers', name: 'Advertisers'},
  { path: '/influencer', name: 'Influencer'},
  { path: '/campaigns', name: 'Campaign'},
  { path: '/pricing', name: 'Pricing' },
  { path: '/privacy-policy', name: 'Privacy and policy'},
  { path: '/reports', name: 'Reports' },
  { path: '/payment', name: 'Payment' },
  { path: '/users', name: 'Users' },
  { path: '/roles', name: 'Roles' },
]

export default routes
