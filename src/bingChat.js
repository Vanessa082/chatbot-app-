// src/bingChat.js
import { BingChat, LocalStorageAdapter } from 'bing-chat';

const chatClient = new BingChat({
  cookie: '<YOUR_BING_CHAT_COOKIE>', // Replace with your Bing Chat cookie
  storageAdapter: new LocalStorageAdapter(), // Use Local Storage for data persistence
});

export default chatClient;