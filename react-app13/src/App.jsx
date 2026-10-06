import React from 'react'
import { RouterProvider } from 'react-router'
import router from './AppRouter'

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App