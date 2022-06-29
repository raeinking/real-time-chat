const express = require('express');
const app = express();
const http = require('http')
const cors = require('cors');

app.use(cors())

const test = http.createServer(app)

const io =  require('socket.io')(8080, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['POST','GET'],
        credentials: true
    }
})

io.on('connection', (socket) => {
    socket.on('your_message', (data) => {
        console.log(data)
    })
    socket.broadcast.emit('global_message' , (data) => {
        console.log(data);
    })
})

