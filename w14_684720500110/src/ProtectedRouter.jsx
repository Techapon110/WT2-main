import React from 'react'
import { useAuth } from './contexts/AuthContext'
import { Navigate } from 'react-router'

function ProtectedRouter({children}) {
    const { claims } = useAuth()
  return (
    <>
        { !claims ? <Navigate to={"/signin"} /> : children }
    </>
  )
}

export default ProtectedRouter