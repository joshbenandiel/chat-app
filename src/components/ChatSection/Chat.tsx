import React, { useRef } from 'react'
import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AppContext } from "../../context/appContext"
import { addNotification, resetNotification } from "../../features/userSlice"
import { useDispatch } from "react-redux"
import { ChatBoxContainer, ChatContainer, ChatInput, ChatWrapper } from '.'
import {FaCircle } from 'react-icons/fa'
import { MdArrowForwardIos, MdGroups , MdOutlineVideocam} from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { HiOutlinePhone }  from 'react-icons/hi'
import { BsEmojiLaughing } from 'react-icons/bs'
import { ImAttachment } from 'react-icons/im'
import { useDebounce } from '../../hooks/debounce'
import { toggleShow } from '../../features/showSideBar'
import { MdArrowBackIosNew } from 'react-icons/md'



export const Chat = () => {
  const user = useSelector((state: any) => state.user)
  const [messages, setMessage] = useState('')
  const dispatch = useDispatch()




  const {socket, setMembers, members, setCurrentRoom, currentRoom, setRooms, privateMsg, setPrivateMsg, rooms, setMessages, message} = useContext(AppContext)
  socket.off('new-user').on('new-user', (payload : any) => {
    setMembers(payload);
  })

  const getRooms = () => {
    fetch('https://chat-app-api-22.herokuapp.com/rooms')
        .then((res) => res.json())
        .then((data) => setRooms(data))
  }
 
  useEffect(() => {
    if(user){
      setCurrentRoom('Room-1')
      getRooms()
      socket.emit('join-room','general');
      socket.emit('new-user')
    }


  },[])




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
    dispatch(toggleShow(!isOpen))
   
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
    dispatch(toggleShow(!isOpen))
    
    
  }

  const messagesEndRef = useRef<any>()


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [message, privateMsg, currentRoom]);
  
  const [searchUserText, setUserText] = useState<string>('');
  const debounceValue = useDebounce(searchUserText, 300);

  const handleSearch = (e: any) => {
    const value = e.target.value.toLowerCase()
    setUserText(value)  
  }

  useEffect(() => {
    socket.emit('search-user', {
      queryText: debounceValue
    })

    socket.on('search-user-result', (data: any) => {
      setMembers(data)
    })
  }, [debounceValue])

  const isOpen = useSelector((state: any) => state.sidebar.isOpen)
  
  

  return (
    <ChatContainer>
      <ChatWrapper open={isOpen ? 'none' : 'block'} show={isOpen ? 'translateX(-300px)' : 'translateX(70px)'}>
        <div className='side-content-wrapper'>
          <MdArrowBackIosNew 
            onClick={() => dispatch(toggleShow(!isOpen))}
            className='chat-back-arrow' size={50} color='black'/>
          <div className='search-section'>
            <div className='search-wrapper'>
              <div>
                <BsSearch size={20} color='#D5DFE5'/>
              </div>
             <input onChange={handleSearch} placeholder='Search...'type="text" />
            </div>
          </div>
          <div className='people-group-chat'>
            {user && (
              <>
                {rooms && rooms.map((room: any, index: any) => {
                    return (
                      <div 
                      onClick={() => joinRoom(room)}
                      className={`members-rooms ${room === currentRoom ? 'active' : ''} flex`} key={index}>
                        <div className='room-inner pl-9 py-6 flex justify-center items-center gap-2'>
                          <MdGroups size={30}/>
                          <h1 className='cursor-pointer font-bold'>{room}</h1>
                        </div>
                        {room === currentRoom && <span className='border-left-active'></span>}
                        {room === currentRoom && <span className='triangle'></span>}
                      </div>
                    )
                })}
                <div className='members-section'>
                  {members && members.map((member: any) => {
                    return (
                      <>
                      {user._id !== member._id && <div 
                        onClick={() => handlePrivateMsg(member)}
                        className={`members-rooms ${member._id === privateMsg?._id ? 'active' : ''} flex`} key={member._id}>
                        <div className='room-inner pl-8 px-6 py-6 flex justify-center items-center gap-2'>
                          <div className='relative'>
                            <img  src={member.picture} alt="avatar" />
                            <FaCircle className='absolute bottom-0 right-0'size={10} color={member.status ==='online' ? 'green' : 'orange'}/>
                          </div>
                          <h1 className='cursor-pointer font-bold'>{member.name}</h1> 
                        </div>
                        {member._id === privateMsg?._id && <span className='border-left-active'></span>}
                        {member._id === privateMsg?._id && <span className='triangle'></span>}
                      </div>}
                      </>
                    )
                  })}
                </div>
              </>
              )}
          </div>
        </div>
        <ChatBoxContainer open={isOpen ? 'block' : 'none'}>
          <div className='chatbox-header'>
            <span 
              onClick={() => dispatch(toggleShow(!isOpen))}
              className='show-sidebar-arrow'><MdArrowForwardIos size={30}/>
            </span>
            <div className='chat-title relative mb-2'>
              {privateMsg ? (
                <>
                <h1 className='text-2xl font-bold'>{privateMsg?.name}</h1>
                <div className='absolute bottom-0 left-0 items-center flex flex-row gap-2'>
                <FaCircle className=''size={10} color={privateMsg?.status ==='online' ? 'green' : 'orange'}/>
                {privateMsg?.status ==='online' ? <span className='chat-status'>Active now</span> : <span className='chat-status'>Offline</span> }
                </div>
                </>
              ) : (
                <>
                <h1 className='text-2xl font-bold'>{currentRoom}</h1>
                <div className='absolute bottom-0 left-0 items-center flex flex-row gap-2'>
                <FaCircle className=''size={10} color='green'/>
                <span className='chat-status'>Active now</span>
                </div>
                </>
              )}
            </div>
            <div className='chat-header-icons'>
              <MdOutlineVideocam className='video-icon'/>
              <HiOutlinePhone className='phone-icon'/>
            </div>
          </div>
          <div className='all-chat-wrapper'>
            {message && message.map((data: any, index: any) => {
              return (
                <div key={index}>
                {data.messagesByDate.map((text: any) => {
                  return (
                    <>
                    <div className={`chat-text-content ${user?._id === text.from._id ? 'user' : ''}`} key={text._id}>
                      <div ref={messagesEndRef} className='chat-box-color'>
                        <div className='chat-text-inner '>
                          {user?._id !== text.from._id && <img className='user-avatar' src={text.from.picture} alt="avatar" />}
                          {/* <h1>{user?.name === text.from.name ? 'You' : nickname[0]}:</h1> */}
                        </div>
                        <div className='flex chat-hover-wrapper'>
                          <span className={user?._id !== text.from._id ? 'chat-date-user': 'chat-date'}>{text.date} {text.time}</span>
                          <div className={`chat-content-wrapper ${user?._id === text.from._id ? 'user' : ''}`}>
                            <p className='text-md'>{text.content}</p>
                          </div>
                        </div>
                        {/* <p className='text-sm'>{text.time}</p> */}
                      </div>
                    </div>
                    </>
                  )
                })}
                </div>
              )
            })}
          </div>
          <ChatInput>
            <form onSubmit={handleSubmit}>
              <button className='chat-emoji mr-3' type='submit' disabled={!user}><BsEmojiLaughing size={20}/></button>
              <input onChange={(e) => setMessage(e.target.value)} placeholder='Your message here...'type="text" value={messages} disabled={!user}/>
              <button className='chat-files mr-3'type='submit' disabled={!user}><ImAttachment size={20}/></button>
              <button className='chat-send' type='submit' disabled={!user}><FiSend size={20}/></button>
            </form>
          </ChatInput>
        </ChatBoxContainer>
      
      </ChatWrapper>
    </ChatContainer>
  )
}