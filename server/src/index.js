"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const socketHandler_1 = __importDefault(require("./socketHandler"));
const path_1 = __importDefault(require("path"));

const app = (0, express_1.default)();

// Serve static files from the React client app
app.use(express_1.default.static(path_1.default.join(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../client/build', 'index.html'));
});

const server = http_1.default.createServer(app);
const io = new socket_io_1.default.Server(server);

io.on('connection', socketHandler_1.default);

server.listen(3001, () => {
    console.log('listening on *:3001');
});
