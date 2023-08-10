import React from 'react'
import {SiChatbot} from 'react-icons/si'
import ChatApp from './ChatApp'

function App() {
  return (
    <div className=' w-[500px]  mx-auto mt-5 h-max-[100vh]'>
        <h1 className='text-center py-2 mx-auto bg-primary justify-center text-white flex items-center'>Feedbak <b>ChatBot</b> 
        <SiChatbot className='ml-3' /> 
        
        </h1>
        <div className=''>
        <ChatApp/>

        </div>

      {/*  */}
    </div>
  )
}

export default App
