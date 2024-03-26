import React from 'react'
import Typed from 'react-typed';
function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
      <div className='max-w-[1240px] my-[100px] mx-auto text-center font-bold mt-4'>
<div className='text-xl md:text-3xl md:p-[24px] '>
  Believe Be Kind.
</div>
<h2 className='text-white text-5xl md:text-[80px] md:p-[20px] '>Be Responsible.</h2>
<div className='text-[20px] md:text-[50px] text-white md:p-[30px]'>
  Thoughts <Typed
  className='pl-3'
  strings= {['Patience','Positive','Helping']}
  typeSpeed={100}
  loop={true}
  backSpeed={50}
/>
</div>
<button className='bg-black text-white p-3 rounded'>Get Started</button>
      </div>
    </div>
  )
}

export default Banner
