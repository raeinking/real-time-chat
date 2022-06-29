import React, {useState} from 'react'
import styled from 'styled-components'
import io from 'socket.io-client'
import person from './user.png'
const socket = io.connect('http://localhost:8080')


function App() {
  const [message , setMessage] = useState('')
  const app = () => {
    socket.emit('your_message', `${message}`)
  }
    const onChangeHandler = event => {
    setMessage(event.target.value);
    }
  
  return (
    <Room>
    <form>
        <div className="room">
          <div className="msg">
            <img src={person} />
            <p>test test test test tset tsettest tsest test test tset set</p>
          </div>
          <div className="msg">
            <img src={person} />
            <p>test test test test tset tsettest tsest test test tset set</p>
          </div>
          
        </div>
        <footer>
          <input typeof='text' onChange={onChangeHandler} required placeholder='your message...' />
          <button onClick={app}>Send</button>
        </footer>
    </form>
    </Room>
  )
}

export default App

const Room = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`