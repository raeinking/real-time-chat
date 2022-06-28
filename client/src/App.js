import io from 'socket.io-client'
const socket = io.connect('http://localhost:8080')



function App() {
  const send = () => {
    socket.emit('send_message' , {message: 'asdffd'})
  }  

 
  return (
    <div className="App">
      <button onClick={send}>submit</button>
    </div>
  );
}

export default App;
