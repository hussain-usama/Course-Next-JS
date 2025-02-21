import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div>Product layout</div>
    </>
  )
}

export default layout