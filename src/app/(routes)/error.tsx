"use client"
import React from 'react'

function ErrorPage({error, reset} : {error: Error, reset: () => void}) {
  return (
    <>
    <div>Error Found</div>
    <p>{error.message}</p>
    <button onClick={()=>reset()}>Try Again</button>
    </>
  )
}

export default ErrorPage