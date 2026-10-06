import React from 'react'
import { useLocation, useParams } from 'react-router'
import ProductCard from '../components/ProductCard'

function ProductItem() {
    const { id } = useParams()
    const location = useLocation()
    const { product } = location.state || {}
  return (
    <div>
        <p className="text-blue-500 text-2xl">
            <p className="text-blue-500 text-xl">
               { product && <ProductCard {...product} />}
            </p>
        </p>
        <p>ID: {id}</p>
    </div>
  )
}

export default ProductItem