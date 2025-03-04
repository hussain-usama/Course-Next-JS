import Link from 'next/link'
import React from 'react'

function F4() {
  return (
    <>
    <h1>F4 Page</h1>
    <Link href={'/f1/f3'}>Go To F3</Link>
    </>
  )
}

export default F4