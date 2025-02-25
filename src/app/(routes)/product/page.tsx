import Link from 'next/link'
import React from 'react'

function Products() {
  return (
    <>
    <h3>Products</h3>
    <h3><Link href='product/1'>Product 1</Link></h3>
    <h3><Link href='product/2'>Product 2</Link></h3>
    <h3><Link href='product/3' replace>Product 3</Link></h3>
    </>
  )
}

export default Products