"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socketHandler = (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('text change', (text) => {
        socket.broadcast.emit('text change', text);
    });
};
exports.default = socketHandler;
