import { io } from 'socket.io-client'
function App() {
  const socket = io('http://localhost:3000', {
    transports: ['websocket']
  })
  socket.on('connection', function (client) {
    var client_ip_address = socket.request.connection.remoteAddress;
  })

  

 
  return (
    <div className="App">
    afasdf
    </div>
  );
}

export default App;
