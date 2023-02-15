import React from 'react'
import Marquee from 'react-fast-marquee'
import {GiAfrica} from 'react-icons/gi'
import africa from '../assets/Africa.webp'

const Banner = () => {
  return (
    <div>
      <div>
        <div className='flex flex-col justify-center items-left w-full h-screen absolute top-0  -z-10 '>
<h1 className=' md:text-[10vw] text-5xl px-10 '> African </h1>
<Marquee gradient={false} speed={200} pauseOnHovr>
<div className=' md:text-[10vw] text-5xl flex justify-evenly w-[250vw] duration-300 '>
<a href="#"><span className='text-green-700'>Film</span> </a>
<a href="#"><span className='text-white'>Photo</span> </a>
<a href="#"><span className='text-green-700'>Art</span> </a>
<img src={africa} alt="" className='w-20 md:w-full' />
</div>
</Marquee>
<h1 className=' md:text-[10vw] text-5xl px-10 '> Display</h1>
        </div>
      </div>
    </div>
  )
}

export default Banner