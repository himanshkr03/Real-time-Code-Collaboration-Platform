import { io } from 'socket.io-client';

let code = '';
let messages = [];


const socket = io('http://localhost:5000');

socket.on('code change', (newCode) => {
  code = newCode;
});

socket.on('chat message', (msg) => {
  messages.push(msg);
});

export { socket, code, messages };
