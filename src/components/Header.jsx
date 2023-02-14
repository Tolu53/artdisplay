import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='w-full  px-10 justify-center flex z-10'>
            <ul className='flex text-black  w-[80%] justify-between md:w-[50%]'>
                <li className='hover:rotate-3 cursor-pointer'>Home</li>
                <li className='hover:rotate-3 cursor-pointer'>Film</li>
                <li className='hover:rotate-3 cursor-pointer'>Fashion</li>
                <li className='hover:rotate-3 cursor-pointer'>Photography</li>
            </ul>
        </div>
    </div>
  )
}

export default Header