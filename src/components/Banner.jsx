import React from 'react'
import Marquee from 'react-fast-marquee'



const Banner = () => {
  return (
    <div>
      <div>
        <div className='flex flex-col justify-center items-left w-full h-screen absolute top-0  -z-10 '>
<h1 className=' md:text-[10vw] text-6xl px-10 '> African </h1>
<Marquee gradient={false} speed={200} pauseOnHovr>
<div className=' md:text-[10vw] text-6xl flex justify-evenly w-[250vw] duration-300 my-20 '>
<a href="#"><span className='text-green-700'>Film</span> </a>
<a href="#"><span className='text-black'>Photography</span> </a>
<a href="#"><span className='text-green-700'>Art</span> </a>
</div>
</Marquee>
<h1 className=' md:text-[10vw] text-6xl px-10 '> Display</h1>
        </div>
      </div>
    </div>
  )
}

export default Banner