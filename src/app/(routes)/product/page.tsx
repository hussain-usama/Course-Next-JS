"use client"
import Link from 'next/link'
import React from 'react'

function getRandomNumber (){
  return Math.floor(Math.random() * 2)
}
function Products() {
  const randomInteger = getRandomNumber()
  if(randomInteger === 1 ){
    throw new Error('We are looking into the issue.......!')
  }
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