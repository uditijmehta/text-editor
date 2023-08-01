import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import TextArea from './TextArea';

let socket: Socket;
const ENDPOINT = 'http://localhost:3001';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.on('text change', (newText: string) => {
      setText(newText);
    });

    return () => {
      socket.off();
    };
  }, []);

  const handleTextChange = (newText: string) => {
    setText(newText);
    socket.emit('text change', newText);
  };

  return (
    <div className="App">
      <TextArea text={text} onTextChange={handleTextChange} />
    </div>
  );
}

export default App;
