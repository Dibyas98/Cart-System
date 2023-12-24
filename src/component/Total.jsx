import React from 'react'

export default function Total(props) {
  return (
    <div className='border-t-2 flex justify-center'>
      <h1 className='pt-1 w-6/12 text-right text-4xl font-semibold text-sky-500'>${props.total}</h1>
    </div>
  )
}
