import React, { useEffect, useRef, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const memCount = useRef(0)

  useEffect(() => {
    memCount.current = count
  }, [count])
  

  function inc() {
    setCount(count + 1)
  } 
  
  const dec = () => {
    setCount(count - 1)
  }

  return (
    <div className="container w-48 h-48 bg-blue-50 rounded-xl flex justify-center items-center shadow-lg">
        <button onClick={dec} className="bg-blue-500 text-white rounded-lg px-2 py-1 cursor-pointer">-</button>
        <p className="text-blue-500 text-3xl mx-2">{count} - {memCount.current}</p>
        <button onClick={inc} className="bg-blue-500 text-white rounded-lg px-2 py-1 cursor-pointer">+</button>
    </div>
  )
}

export default Counter