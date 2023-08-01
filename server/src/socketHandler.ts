import { Socket } from 'socket.io';

const socketHandler = (socket: Socket): void => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('text change', (text: string) => {
    socket.broadcast.emit('text change', text);
  });
};

export default socketHandler;
