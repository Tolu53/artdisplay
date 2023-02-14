import React from 'react'
import pic1 from '../assets/amor-Ka1fD6H28Hc-unsplash.jpg'

const Page = () => {
  return (
    <div>
        <div className='w-full h-screen absolute top-0 bg-black/20 -z-10'>
            <div className=' h-full flex items-center justify-center '>
                <div className='justify-center flex items-center  '>
                    <img src={pic1} alt="" className='w-1/5 min-w-[300px]'/>
                </div>
              
            </div>
           
        </div>
    </div>
  )
}

export default Page