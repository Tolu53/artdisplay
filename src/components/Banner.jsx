import React from 'react'
import Marquee from 'react-fast-marquee'

const Banner = () => {
  return (
    <div>
      <div>
        <div className='flex flex-col justify-center items-left w-full h-screen absolute top-0 p-10'>
<h1 className='text-[10vw]'> African </h1>
<Marquee gradient={false} speed={200} pauseOnHover>
<div className='text-[10vw] flex justify-evenly w-full duration-300 '>
<a href="#"><span className='text-green-700'>Film</span> </a>
<a href="#"><span className='text-white'>Photo</span> </a>
<a href="#"><span className='text-green-700'>Art</span> </a>

</div>
</Marquee>

<h1 className='text-[10vw]'> Display</h1>
        </div>
      </div>
    </div>
  )
}

export default Banner