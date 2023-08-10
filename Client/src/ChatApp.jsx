import React, { useState } from 'react';
import {IoSendSharp} from 'react-icons/io5'
import {BiSolidBot} from 'react-icons/bi'
import {IoPerson} from 'react-icons/io5'

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newMessages = [...messages, { text: newMessage, user: 'user' }];
    setMessages(newMessages);
    setNewMessage('');
    // Add logic to send the message to the chatbot backend here
  };

  return (
    <div className="chat-container">
      <div className="chat-messages w-full">
      
        <div className='flex gap-2 items-center w-full mb-1'>
            <BiSolidBot className='text-blue-400 -mb-2 self-end text-[30px]'/>
            <div className="border-solid flex items-center gap-3 border-2 border-blue-200 mr-auto px-5 py-2 rounded-t-[18px] rounded-br-[18px] w-[65%]">
            Hi, what can i help you ?
          </div>
          
        </div>
      
          
        {messages.map((message, index) => (
            <div className='flex gap-1 items-center w-full mb-1'>
                 <div key={index} className="bg-blue-200 overflow-hidden ml-auto px-5 py-2 rounded-t-[18px] rounded-bl-[18px] mb-1 w-[200px]">
                    {message.text}
                </div>
                <IoPerson className='text-blue-400 -mb-2 self-end text-[30px]'/>

            </div>
         
        ))}

        
      </div>
      <div className="input-container flex justify-between w-full mt-5 text-primary">
        <input
         className='flex-1 border-solid border-[1px] p-2 text-black focus:outline-none border-blue-200'
          type="text"
          placeholder="Type your feedback here ..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button className='bg-blue-200 px-5 ml-auto rounded-sm hover:bg-primary flex items-center gap-3 hover:text-white' onClick={handleSendMessage}>Send <IoSendSharp/> </button>
      </div>
    </div>
  );
}

export default ChatApp;
