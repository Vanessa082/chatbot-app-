// src/App.jsx
import chatClient from './bingChat'; 
import React, { useState } from 'react';
import { BingChat, LocalStorageAdapter } from 'bing-chat';

const App = () => {
  const [userMessage, setUserMessage] = useState('');

  const handleUserInput = (event) => {
    setUserMessage(event.target.value);
  };

  const sendMessage = (event) => {
    event.preventDefault();

    if (userMessage.trim() !== '') {
      chatClient.send({ message: userMessage }).then((response) => {
        handleChatResponse(response);
      });
      setUserMessage(''); // Clear the input field after sending the message
    }
  };

  const handleChatResponse = (response) => {
    // Handle the chat response here, like displaying it to the user
  };

  return (
    <div className="App">
      <form onSubmit={sendMessage}>
        <input type="text" value={userMessage} onChange={handleUserInput} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default App;