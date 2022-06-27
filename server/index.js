const express = require('express');
const app = express();
const http = require('http')
const cors = require('cors');



app.use(cors())

const test = http.createServer(app)

const socket =  require('socket.io')(3000, {
    cors: {
        origin: 'http://localhost/:3001',
        methods: ['post','get'],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
})

// socket.on('error',  err => {
//     console.log(err)
// })

socket.on('connection', function (user) {
    var address = user.handshake.address;
console.log('New connection from ' + address.address + ':' + address.port);
  });