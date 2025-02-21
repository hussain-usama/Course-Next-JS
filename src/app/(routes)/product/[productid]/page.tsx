import React from 'react'
import { notFound } from 'next/navigation'

function ProductDetails({ params } : { params : { productid : string }}) {
  if(Number(params.productid) > 100){
    return notFound()
  }
  return (
    <h1>Product Details {params.productid}</h1>
  )
}

export default ProductDetails