import React, { useEffect, useState } from 'react'
import supabase from '../../config/db';
import CategoryCard from '../components/CategoryCard';

function Category() {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    
    async function getCategorise() {
      const { data, error } = await supabase.from('category').select()
      if (!error){
        setCategories(data);
      }else{
        console.log(error)
      }
    }

    getCategorise()

  }, [])
  
  async function handleAddCategory(){
    const { error } = await supabase.from('catagory').insert({cat_name: 'juice', cat_desc: 'Juice & Smoothy'})
    if (!error){
      alert('Add Successfully')
    } else{
      alert('Add Failed')
    }

  }

  return (
    <div>
      <button onClick={handleAddCategory} className="text-white bg-blue-500 rounded-xl px-5 py-2 cursor-pointer">Add Category</button>
    <hr className="divide-x-2" />
    <div className='m-5 flex flex-wrap gap-10'>
      {categories && categories.map(c => <CategoryCard key={c.cat_id} {...c} />)}
    </div>
    </div>
  )
}

export default Category









// import React, { useState } from "react";
// import CategoryCard from "../components/CategoryCard";

// function Category() {
//   const [category, setCategory] = useState({})
//   const [categories, setCetegories] = useState([])

//   function addCategory() {
//     setCetegories([...categories, {...category}])
//     setCategory({})
//   }

//   return (
//     <div className="container m-2">
//       <div className="w-4/12 mx-auto mt-3 flex flex-col border border-blue-500 rounded-lg bg-white p-8">
//         <h2 className="title-font text-center mb-1 text-lg font-medium text-blue-500">
//           บันทึกหมวดสินค้า
//         </h2>
//         <div className="mb-3">
//           <label htmlFor="id" className="text-sm leading-7 text-blue-500">
//             รหัสหมวดสินค้า
//           </label>
//           <input
//             onChange={ e => setCategory({...category, id: e.target.value})}
//             type="text"
//             name="id"
//             className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-blue-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-indigo-200"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="name" className="text-sm leading-7 text-blue-500">
//             ชื่อหมวดสินค้า
//           </label>
//           <input
//           onChange={ e => setCategory({...category, name: e.target.value})}
//             type="text"
//             name="name"
//             className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-blue-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-indigo-200"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="description" className="text-sm leading-7 text-blue-500">
//             คำอธิบายหมวดสินค้า
//           </label>
//           <textarea
//           onChange={ e => setCategory({...category, description: e.target.value})}
//             name="description"
//             className="h-32 w-full resize-none rounded border border-blue-500 bg-white py-1 px-3 text-base leading-6 text-blue-700 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-indigo-200"
//           />
//         </div>
//         <button onClick={addCategory} className="rounded border-0 bg-blue-500 py-2 px-6 text-lg text-white hover:bg-blue-600 focus:outline-none">
//           บันทึกข้อมูล
//         </button>
//       </div>
//       <div className="container m-5 flex flex-wrap gap-10">
//           { categories.length > 0 && categories.map( (c,index) => <CategoryCard key={index} {...c}  />)  }
//       </div>
//     </div>
//   );
// }

// export default Category;
