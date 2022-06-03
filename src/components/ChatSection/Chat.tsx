import React from 'react'
import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AppContext } from "../../context/appContext"
import { addNotification, resetNotification } from "../../features/userSlice"
import { useDispatch } from "react-redux"
import { ChatBoxContainer, ChatContainer, ChatInput, ChatWrapper } from '.'
import {FiSend} from 'react-icons/fi'
import {FaCircle} from 'react-icons/fa'


export const Chat = () => {
  const user = useSelector((state: any) => state.user)
  const [messages, setMessage] = useState('')
  const dispatch = useDispatch()

  const {socket, setMembers, members, setCurrentRoom, currentRoom, setRooms, privateMsg, setPrivateMsg, rooms, setMessages, message} = useContext(AppContext)
  socket.off('new-user').on('new-user', (payload : any) => {
    setMembers(payload);
  })


  useEffect(() => {
    if(user){
      setCurrentRoom('Room-1')
      getRooms()
      socket.emit('join-room','general');
      socket.emit('new-user')
    }


  },[])


  const getRooms = () => {
    fetch('http://localhost:5001/rooms')
        .then((res) => res.json())
        .then((data) => setRooms(data))
  }


  const getFomattedDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    let months = (1+date.getMonth().toString())
    months = months.length > 1 ? months : '0' + months;
    let day = date.getDate().toString()
    day = day.length > 1 ? day : '0' + day;
    return months + '/' + day + '/' + year

  }

  const todayDate = getFomattedDate()

  socket.off('room-messages').on('room-messages', (roomMessages: any) => {
    setMessages(roomMessages);
  })  

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if(!messages) return;
    const today = new Date()
    const minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
    const time = today.getHours() + ':' + minutes;
    const roomId = currentRoom;
    socket.emit('message-room', roomId, messages, user, time, todayDate)
    setMessage('')
  } 

  const joinRoom = (room: any, isPublic = true) => {
    if(!user){
      return alert('PLEASE LOGIN!')
    }
    socket.emit('join-room', room, currentRoom);
    setCurrentRoom(room)

    if(isPublic){
      setPrivateMsg(null)
    }

    dispatch(resetNotification(room))

   
  }

  socket.off('notifications').on('notifications', (room: any) => {
    if(currentRoom !== room) dispatch(addNotification(room))
  })


  const orderIds = (id1:any, id2: any) => {
      if(id1 > id2){
        return id1 + '-' + id2
      } else {
        return id2 + '-' + id1
      }
  }

  const handlePrivateMsg = (member: any) => {
    setPrivateMsg(member)
    const roomId = orderIds(user._id, member._id)
    joinRoom(roomId, false)
  }
  return (
    <ChatContainer>
      <ChatWrapper>
        <div>
        {user && (
          <div className='side-content-chat'>
            <h1 className='text-5xl font-bold'>Available Rooms</h1>
            {rooms && rooms.map((room: any, index: any) => {
              return (
                <div 
                onClick={() => joinRoom(room)}
                className={`members-rooms ${room === currentRoom ? 'active' : ''} flex`} key={index}>
                  <h1 className='cursor-pointer'>{room}</h1>
                  <span>{user.newMessage[room]}</span>
                </div>
              )
            })}
            <h1 className='text-5xl font-bold'>Members</h1>
            {members && members.map((member: any) => {
              console.log(member)
              return (
                <div 
                  onClick={() => handlePrivateMsg(member)}
                  className={`members-rooms ${member._id === privateMsg?._id ? 'active' : ''} flex`} key={member._id}>
                  <div className='relative'>
                    <img src={member.picture} alt="avatar" />
                    <FaCircle className='absolute bottom-0 right-0'size={10} color={member.status ==='online' ? 'green' : 'orange'}/>
                  </div>
                  <h1 className='cursor-pointer'>{member.name}</h1> 
                  {user._id === member?._id && <span>(You)</span>}
                  {member.status == 'offline' && <span>(Offline)</span>}
                </div>
              )
            })}
          </div>
          )}
        </div>
        <div>
          <ChatBoxContainer>
            {message.map((data: any) => {
              return (
                <div key={data._id}>
                  <h1>{data._id}</h1>
                  {data.messagesByDate.map((text: any,) => {
                    return (
                      <div key={text._id}>
                        {text.content}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </ChatBoxContainer>
          <ChatInput>
            <form onSubmit={handleSubmit}>
              <input onChange={(e) => setMessage(e.target.value)} placeholder='Your Message'type="text" value={messages} disabled={!user}/>
              <button type='submit' disabled={!user}><FiSend size={30}/></button>
            </form>
          </ChatInput>
        </div>
      </ChatWrapper>
    </ChatContainer>
  )
}