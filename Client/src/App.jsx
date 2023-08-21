import React from 'react'
import {SiChatbot} from 'react-icons/si'
import {MdOutlineEmail} from 'react-icons/md'
import {GiRotaryPhone} from 'react-icons/gi'
import ChatApp from './ChatApp'
import logo from './Logo.png'
import doctors from './doctors.png'

function App() {
  return (
    <div className='md:flex md:flex-col'>
      {/* HEADER */}
        <div className='h-[100px] flex items-center justify-between shadow-lg p-4 px-24 -md'>
          <img src={logo} className='h-full' alt="" />

          <div className=' flex-row gap-8 text-blue'>
            <span className='flex items-center gap-2'>
              <MdOutlineEmail className='font-bold text-[20px]'/>
              <span><span className='font-bold'>Main Email:</span>  contact@AddisCentral.com</span>
            </span>

            <hr className='my-1' />
            
            <span className='flex items-center gap-2'>
              <GiRotaryPhone className='font-bold text-[20px]'/>
              <span><span className='font-bold'>Office Telephone:</span>  01155423</span>
            </span>
            
           

          </div>

        </div>

        {/* MAIN BODY */}
        <div className='px-32 flex h-[82vh] justify-between items-center relative z-10'>
          {/* LEFT SIDE */}
          <div className='mt-[12%] w-[40%] self-start'>
            <h1 className='font-bold text-[32px] text-green'>
            Your Voice Matters!
            </h1>
            <p className='text-[18px] text-blue font-semibold'>Share Your Feedback, Stay Informed!</p>

            <p className='mt-7 text-[18px] font-semibold'>Welcome to Addis Central Hospital's Feedback Hub. 
              Your feedback is our compass, guiding us towards excellence. 
              We're here to listen, improve, and provide the care you 
              deserve. Let's make healthcare better together.
              </p>

          </div>


          {/* RIGHT SIDE */}
          <div className='h-[450px] w-[50%] rounded-b-lg shadow-lg'>
            
            <ChatApp/>
          
            
          </div>
          
        </div>
        {/* Footer */}
        

    <img className='absolute top-[100px] w-[50%] opacity-20 z-1' src={doctors} alt="" />
    </div>
  )
}

export default App
