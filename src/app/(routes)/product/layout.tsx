import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Products",
  description: "Showing Products",
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div>Product layout</div>
    </>
  )
}

export default layout