import React from 'react'

function DocFeatures({params} : { params : { slug : Array<string>} }) {
    console.log(params,'slug params')
  return (
    <div>DocFeatures</div>
  )
}

export default DocFeatures