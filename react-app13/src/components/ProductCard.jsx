import React from 'react'

function ProductCard(props) {
  const {id, title, price, thumbnail, rating } = props
  return (
    <div className="w-48 h-64 flex flex-col items-center overflow-hidden rounded-xl shadow-lg">
        <img className='w-32 h-32' src={ thumbnail } alt="product" />
        <p className='text-blue-600 text-sm'>{ title }</p>
        <p>{ price }</p>
        <p>{ rating }</p>
    </div>
  )
}

export default ProductCard