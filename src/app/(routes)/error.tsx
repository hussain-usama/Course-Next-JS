"use client"
import React from 'react'

function ErrorPage({error} : {error: Error}) {
  return (
    <>
    <div>Error Found</div>
    <p>{error.message}</p>
    </>
  )
}

export default ErrorPage