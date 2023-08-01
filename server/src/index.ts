import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import cors from 'cors';
import socketHandler from './socketHandler';

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new socketIo.Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', socketHandler);

server.listen(3001, () => {
  console.log('listening on *:3001');
});
