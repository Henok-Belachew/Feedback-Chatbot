import React, { useState, useEffect, useRef } from 'react';
import {IoSendSharp} from 'react-icons/io5';
import {BiSolidBot} from 'react-icons/bi';
import {IoPerson} from 'react-icons/io5';
import axios from 'axios';




function ChatApp() {
  const [change, setChange] = useState(false)
  const [messages, setMessages] = useState(["Hi, what can i help you ?"]);
  const [newMessage, setNewMessage] = useState('');
  const chatRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage === "/clear") {
      setMessages([])
      setChange(chg => !chg)
      setNewMessage('');
      
      return
    }
    if (newMessage.trim() === '') return;

    const newMessages = [...messages, { text: newMessage, user: 'User' }];
    setMessages(newMessages);
    setNewMessage('');

  };

  

  const scrollToBottom = () => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  };

  useEffect(() => {
    // Scroll to the bottom whenever new messages are added
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-container rounded-b-lg">
      <h1 className='text-center py-3 bg-green text-white font-semibold rounded-t-md'>Let's Chat</h1>

      {/*--------- CHAT MESSAGES -------- */}
      <div ref={chatRef} className="chat-messages relative overflow-x-hidden overflow-scroll border-solid h-[360px] py-5 border-blue-200 border-x-[1px] w-full">

     {messages.map((message, index) => {
          if (message.user === 'User') {
            return(
              <div className='flex gap-1 pr-2 items-center w-full relative z-[5] mb-1 mr-3'>
                 <div key={index} className="bg-green text-white font-semibold overflow-hidden ml-auto px-5 py-2 rounded-t-[18px] rounded-bl-[18px] mb-1 w-fit max-w-[70%]">
                    {message.text}
                </div>
                <IoPerson className='text-green -mb-2 self-end text-[30px]'/>

            </div>
            )
          }

          else {
            return(
              <div className='flex gap-2 pl-2 items-center relative z-[5] w-full mb-4 ml-3'>
            <BiSolidBot className='text-green -mb-2 self-end text-[30px]'/>
            <div className="border-solid flex items-center gap-3 border-2 border-green mr-auto px-5 py-2 rounded-t-[18px] rounded-br-[18px] w-fit bg-white max-w-[70%] font-semibold">
            Hello! I'm here to assist you with any questions or information you need. How can I assist you today?
          </div>
          
        </div>
            )
          }
        })}

        

        
      </div>
      <div className="input-container flex justify-between rounded-b-lg w-full text-primary ">
        <input
         className='flex-1 border-solid border-[1px] p-4 rounded-bl-lg text-black focus:outline-none border-blue-200'
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
        <button className='bg-[#c1c1c1] font-semibold px-5 ml-auto rounded-sm hover:bg-green rounded-br-lg flex items-center gap-3 hover:text-white' onClick={handleSendMessage}>Send <IoSendSharp/> </button>
      </div>
    </div>
  );
}

export default ChatApp;
