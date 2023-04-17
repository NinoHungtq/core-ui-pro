import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCalculator,
  cilCursor,
  cilDrop,
  cilGrid,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
} from '@coreui/icons'
import {  CNavItem } from '@coreui/react-pro'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info-gradient',
    //   text: 'NEW', 
    // },
    //accessWith: true
  },
  {
    component: CNavItem,
    name: 'Advertisers management',
    to: '/advertisers',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    //accessWith: true
  },
  {
    component: CNavItem,
    name: 'Influencer management',
    to: '/influencer',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    //accessWith: true
  },
  {
    component: CNavItem,
    name: 'Campaign management',
    to: '/campaigns',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    //accessWith: true
  },
  {
    component: CNavItem,
    name: 'Pricing management',
    to: '/pricing',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    //accessWith: true
  },
  {
    component: CNavItem,
    name: 'Privacy and policy',
    to: '/privacy-policy',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    //accessWith: true
  },
  {
    component: CNavItem,
    name: 'Reports',
    to: "/reports",
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    //accessWith: true
  },
  {
    component: CNavItem,
    name: 'Payment',
    to: "/payment",
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    //accessWith: true
  },
  {
    component: CNavItem,
    name: 'Admin user management',
    to: '/users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    //accessWith: true
  },
  {
    component: CNavItem,
    name: 'Admin role management',
    to: '/roles',
    icon: <CIcon icon={cilGrid} customClassName="nav-icon" />,
    //accessWith: true
  },
]

export default _nav
