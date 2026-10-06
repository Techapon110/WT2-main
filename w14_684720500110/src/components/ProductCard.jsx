import React from 'react'


function ProductCard(props) {
  const {pro_id, pro_name, price, rating } = props
  return (
    <div className="w-48 h-64 flex flex-col items-center overflow-hidden rounded-xl shadow-lg">
        <img className='w-48 h-48'  src={ `https://picsum.photos/280/280?random=1`} alt="product" />
        <p className='text-blue-600 text-sm'>{ pro_name }</p>
        <p>{ price }</p>
        <p>{ rating }</p>
    </div>
  )
}

export default ProductCard