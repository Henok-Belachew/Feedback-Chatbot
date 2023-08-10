import React, { useState, useEffect } from 'react';
import {IoSendSharp} from 'react-icons/io5';
import {BiSolidBot} from 'react-icons/bi';
import {IoPerson} from 'react-icons/io5';
import axios from 'axios';



function ChatApp() {
  const [change, setChange] = useState(false)
  const [messages, setMessages] = useState(["Hi, what can i help you ?"]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(()=>{
    axios.get("http://127.0.0.1:5000/hi").then((response) => {
    let hi = response.data  
    setMessages([{text: hi, user: 'bot' }])
    }).catch(error => alert(error))
  }, [change])


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

    axios.get("http://127.0.0.1:5000/hi").then((response) => {
    let hi = response.data  
    // const newMessages = [...messages, { text: hi, user: 'bot' }];
    setMessages(oldMessages => [...oldMessages, { text: hi, user: 'bot' }]);
    }).catch(error => alert(error))
    // Add logic to send the message to the chatbot backend here
  };

  return (
    <div className="chat-container h-full">

      {/*--------- CHAT MESSAGES -------- */}
      <div className="chat-messages overflow-x-hidden overflow-scroll border-solid h-full py-5 border-blue-200 border-x-[1px] w-full">
      
       
      
          
        {messages.map((message, index) => {
          if (message.user === 'User') {
            return(
              <div className='flex gap-1 pr-2 items-center w-full mb-1'>
                 <div key={index} className="bg-blue-200 overflow-hidden ml-auto px-5 py-2 rounded-t-[18px] rounded-bl-[18px] mb-1 w-fit max-w-[70%]">
                    {message.text}
                </div>
                <IoPerson className='text-blue-400 -mb-2 self-end text-[30px]'/>

            </div>
            )
          }

          else {
            return(
              <div className='flex gap-2 pl-2 items-center w-full mb-4'>
            <BiSolidBot className='text-blue-400 -mb-2 self-end text-[30px]'/>
            <div className="border-solid flex items-center gap-3 border-2 border-blue-200 mr-auto px-5 py-2 rounded-t-[18px] rounded-br-[18px] w-fit max-w-[70%]">
            Hi, what can i help you ?
          </div>
          
        </div>
            )
          }
        })}

        
      </div>
      <div className="input-container flex justify-between w-full text-primary">
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
