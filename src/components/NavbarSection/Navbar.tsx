import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { NavWrapper } from '.'
import { useLogoutUserMutation } from '../../services/appApi'
import logo from './images/logo-removebg-preview.png'



export const Navbar = () => {

  const [showDrop, setShowDrop] = useState<boolean>(false)
  const user = useSelector((state: any) => state.user)
  const [logoutUser] = useLogoutUserMutation()
  const navigate = useNavigate()

  const handleLogout = async(e: any) => {
    e.preventDefault()
    await logoutUser(user);
    setShowDrop(false)
    
    navigate('/')
  }

  return (
    <div className='flex justify-center bg-transparent w-full absolute top-0 left-0 bg-opacity-10'>
      <NavWrapper>
        <Link to='/'>
          <div className='flex justify-center items-center gap-2'>
              <img src={logo} alt="logo" />
              <h1>ChatApp</h1>
          </div>
        </Link>
        <div className='flex justify-center items-center gap-5'>
          {!user && (
            <Link to='/login'>
              <h1>Login</h1>
            </Link>
          )}
          <Link to='/chat'>
            <h1>Chat</h1>
          </Link>
          <div className='relative'>
            {user && (
              <div 
                onClick={() => setShowDrop(!showDrop)}
                className='flex justify-center items-center gap-2 cursor-pointer'>
                <img className='h-10 rounded-full border-2 border-gray-500'src={user.picture} alt="avatar" />
                <h1 className='text-lg'>{user.name}</h1>
              </div>
            )}
            {showDrop && (
              <span className='absolute h-10 w-full bottom-0 left-0 bg-gray-100 translate-y-10 flex justify-center items-center'>
                <button 
                  onClick={handleLogout}
                  className='text-lg'>Logout</button>
              </span>
            )}
          </div>
        </div>
      </NavWrapper>
    </div>
  )
}

