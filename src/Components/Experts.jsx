import React from 'react'
import Life from "../assets/image/Life.jpg";
export default function Experts() {
  return (
<div className='max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-2'>
<div className='col-span-1 md:w-[80%] text-center'>
<img src={Life} alt="" className='inline'/>
</div>
<div className='col-span-1 flex flex-col justify-center'>
    <h1 className='text-[#00df9a] font-bold my-2'>BEST ADVICE FOR LIFE</h1>
    <p className='my-2 text-justify'>
    Everyone is in search of how to live a happy life--when in reality, the search begins with you. Happiness is not "found." It is realized.
It is already right here.Always seek to understand before having an opinion. You have two ears and one mouth.
    </p>
    <button className='w-[30%] inline bg-black text-white p-3 rounded'>Get Started</button>
</div>
</div>
  )
}
