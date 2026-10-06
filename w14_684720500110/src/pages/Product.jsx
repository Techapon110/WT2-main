import React, { useEffect, useState } from 'react'
import supabase from '../config/Db'
import ProductCard from '../components/ProductCard'

function Product() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    async function getProducts() {
      const { data, error } = await supabase.from("product").select(`pro_id, pro_name, price, rating, category(cat_id, cat_name)`)
      if (!error) {
        setProducts(data)
      } else {
        console.log(error)
      }
    }
    getProducts()

  }, [])
  
  return (
    <div className='m-5 flex flex-wrap gap-10'>
      { products && products.map( p => <ProductCard key={p.pro_id} {...p} /> ) }
    </div>
  )
}

export default Product








// import React, { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";
// import { NavLink } from "react-router";
// import ProductShimmer from "../components/ProductShimmer";

// function Product() {
//   const [products, setProducts] = useState(null);

//   useEffect(() => {
//     async function getProducts() {
//       await fetch("https://dummyjson.com/products")
//         .then((res) => res.json())
//         .then((data) => setProducts(data.products));
//     }
//     getProducts();
//   }, []);
//   if (!products)
//     return <ProductShimmer />

//   return (
//     <div className="container m-5 flex justify-center flex-wrap gap-8 duration-500 animate-in fade-in zoom-in">
//       { products && products.map((p) => (
//         <NavLink to={`/product/${p.id}`} end state={{ product: p }} key={p.id}>
//           <ProductCard {...p} />{" "}
//         </NavLink>
//       ))}
//     </div>
//   );
// }

// export default Product;
