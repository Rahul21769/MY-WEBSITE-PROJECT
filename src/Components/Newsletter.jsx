import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] mx-auto md:flex justify-between'>
            <div className='m-2'>
                <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to get advice in Life?</h1>
                <span className='text-[white]'>Sign Up to our newsletter and get update daily</span>
            </div>
            <div className='m-2'>
                <input  type="text" className='sm:w-full rounded mb-2 p-3 mr-2 text-slate=600' placeholder='Email'/>
                <button className='bg-black text-white p-3 rounded'>Get Started</button>
                <br/>
                <p className='text-[white]'>
                    If you want to have free best life advices <br/><a href="" className='text-black'>Visit Our Page</a>
                </p>
            </div>
        </div>
    </div>
  )
}
