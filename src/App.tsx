import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/HomeSection/Home';
import { Login } from './components/LoginSection/Login';
import { Signup } from './components/SignupSection/Signup';
import { Chat } from './components/ChatSection/Chat';
import { Navbar } from './components/NavbarSection/Navbar';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { AppContext, socket } from './context/appContext';

function App() {


  const [rooms, setRooms] = useState([])
  const [currentRoom, setCurrentRoom] = useState([])
  const [members, setMembers] = useState([])
  const [message, setMessages] = useState([])
  const [privateMsg, setPrivateMsg] = useState([])
  const [newMessages , setNewMessages] = useState([])
  return (
    <AppContext.Provider value={{socket,rooms, setRooms, currentRoom, setCurrentRoom, members, setMembers, message,setNewMessages,privateMsg,setPrivateMsg, setMessages,newMessages}}>
      <div className="flex justify-center items-center flex-col relative w-full overflow-x-hidden">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/chat' element={<Chat/>}/>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
