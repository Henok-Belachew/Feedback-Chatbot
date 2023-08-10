import React, { useState } from 'react';
import {IoSendSharp} from 'react-icons/io5'

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
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container flex justify-between w-full text-primary">
        <input
         className='flex-1 border-solid border-[1px] p-2 focus:outline-none border-blue-200'
          type="text"
          placeholder="Type your message..."
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
