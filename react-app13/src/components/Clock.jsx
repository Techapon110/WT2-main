import React, { useEffect, useState } from 'react'

function Clock() {
    const [clock, setClock] = useState(new Date())
    useEffect(() => {
      const timer = setInterval(() => {
         setClock(new Date())
      }, 1000);
    
      return () => {
        clearInterval(timer)
      }
    }, [])
    
  return (
    <div className='text-blue-600 text-5xl font-bold text-shadow-lg'>{clock.toLocaleTimeString()}</div>
  )
}

export default Clock