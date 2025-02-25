"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function OrderDetails() {
    const router = useRouter()
  return (
    <div>OrderDetails<br/>
        <button onClick={()=>router.push('/product')}>View More Products</button>
    </div>
  )
}

export default OrderDetails