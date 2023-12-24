import React from 'react'
import './header.css'

export default function Header(props) {
  return (
    <div className='flex bg-sky-600 justify-center gap-32'>
      <h1 className='text-5xl font-semibold text-gray-200'>UseReducer</h1>
      <div className='relative'>
      <svg className='text-5xl fill-white lucide lucide-shopping-cart' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
      <p className='text-gray-200 bg-slate-400 w-[30px] h-[30px] rounded-full text-center absolute top-0 left-5 '>{props.cart}</p>
      </div>
    </div>
  )
}
