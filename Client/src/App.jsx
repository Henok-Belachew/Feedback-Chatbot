import React from 'react'
import {SiChatbot} from 'react-icons/si'
import ChatApp from './ChatApp'

function App() {
  return (
    <div className=' w-[400px] mx-auto mt-5'>
        <h1 className='text-center py-2 mx-auto bg-primary justify-center text-white flex items-center'>Feedbak <b>ChatBot</b> <SiChatbot className='ml-3' />  </h1>
        <div className='mt-5'>
        <ChatApp/>

        </div>

      {/*  */}
    </div>
  )
}

export default App
