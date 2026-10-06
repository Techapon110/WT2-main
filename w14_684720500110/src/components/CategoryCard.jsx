import React from 'react'
import { supabase_storage } from '../config/Db'

function CategoryCard(props) {
    const {cat_id, cat_name, cat_desc } = props
  return (
        <div className="relative w-48 h-64 flex flex-col items-center overflow-hidden rounded-xl shadow-lg">
        <img className='w-48 h-64' src={`${supabase_storage}/category/${cat_id}.png`} alt="product" />
        <p className='absolute bottom-3 bg-blue-400 text-white text-xl font-bold px-5 py-2 rounded-xl '>{ cat_name }</p>
    </div>
  )
}

export default CategoryCard