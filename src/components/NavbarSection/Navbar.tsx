import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { NavContainer, NavWrapper } from '.'
import { useLogoutUserMutation } from '../../services/appApi'
import logo from './images/logo-removebg-preview.png'
import { MdLogout, MdSettings, MdMessage, MdPhone, MdPersonOutline, MdNotificationsNone, MdLogin} from 'react-icons/md'



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
    <NavContainer>
      <NavWrapper>
        <Link to='/'>
          <div className='flex justify-center items-center gap-2 nav-user'>
            {user ? (
              <img className='user-profile rounded-full'src={user.picture} alt="logo" />
            ) : <img className='web-logo'src={logo} alt="logo" />
            }
              
          </div>
        </Link>
        <div className='nav-body'>
          <ul>
            <Link to='/chat'>
              <li className={user && 'active'}><MdMessage size={30}/></li>
            </Link>
            <li><MdPhone size={30}/></li>
            <li><MdPersonOutline size={30}/></li>
            <li><MdNotificationsNone size={30}/></li>
          </ul>
        </div>
        <div className='nav-footer'>
          <MdSettings className='settings-button'size={30}/>
          {!user ?
          (
            <Link to='/login'>
              <MdLogin className='login-button' size={30}/> 
            </Link>
          ) :  (
            <MdLogout 
            onClick={handleLogout}
            className='logout-button'size={30}/>
          ) }
          
        </div>
      </NavWrapper>
    </NavContainer>
  )
}

