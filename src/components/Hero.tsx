import React from 'react'
import Navbar from "@/components/Navbar"
import image from 'next/image'

const Hero = () => {
  return (
    <div>
<div className='text-center font-bold p-32'>
    <h1 className='text-5xl font-bold text-black'>Payments</h1>
    <h1 className='mt-4 text-lg text-black'>infrastructure</h1>
    <h1>for the internet</h1>

    <p className='text-black'>millions of businesses of all size-from startup to large  <br />
    enterprises-use Stripe's software and APIs tonpm  accept <br />
     payments, send payouts and manage their nusinesses online.</p>
   
</div>

<div className="flex flex-col  items-end gap-4">
        <img className="flex" src="device.png" alt="Device" />
        <img className="flex" src="contentUp.png" alt="Content" />
      </div>
    </div>
  )
}

export default Hero




