import React, { useState } from 'react'
import data from './cart.json'
import Card from './Card';

export default function CartList(props) {
  

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-5xl font-bold'>Your Bag</h1>
      {
        data.map((ele) =>{
          return <Card key={ele.id} product={ele} update= {props.update}/>
        })
      }
    </div>
  )
}
