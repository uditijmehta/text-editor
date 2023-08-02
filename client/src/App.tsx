import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { Container, Toolbar, Typography, Grid} from '@material-ui/core';
import TextArea from './TextArea';
import './App.css';

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
      <Toolbar>
        <Grid container justifyContent="center">
          <Typography variant="h6">Real-time Collaborative Text Editor</Typography>
        </Grid>
      </Toolbar>
      <Container maxWidth="sm">
        <TextArea text={text} onTextChange={handleTextChange} />
      </Container>
    </div>
  );
}

export default App;
