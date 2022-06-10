import React from 'react'
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LoginContainer, LoginWrapper } from '.'
import { AppContext } from "../../context/appContext"
import { useLoginUserMutation } from '../../services/appApi'
import bg from '../HomeSection/images/image_processing20210528-29044-wrqyaj.gif'


interface Form {
  email: string
  pass: string
}
export const Login = () => {

  const [formData, setFormData] = useState<Form>({
    email: '',
    pass: '',
  })
  const [loginUser, {isLoading, error}] = useLoginUserMutation<any>();

  const navigate = useNavigate()
  const {socket} = useContext(AppContext)

  const handleChange = (e: any) => {
    const {value, name} = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    loginUser({email: formData.email, password: formData.pass}).then(({data}: any) => {
      if(data){
        socket.emit('new-user')
        navigate('/chat')
      }
    })
  }
  return (
    <LoginContainer>
      <img className='bg-login' src={bg} alt="background" />
      <LoginWrapper>
        <div>
          {error && <div className='text-error-login'><h3>{error?.data}</h3></div>}
          <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input name='email' placeholder='Enter Email Address' type="email" required onChange={handleChange}/>
            <label htmlFor="pass">Password</label>
            <input name='pass' placeholder='Enter Password'type="password" required onChange={handleChange}/>
            <div className='button-wrapper-login'>
              <button className='rounded-full' type='submit'>{isLoading ? 'Logging in...' : 'Login'}</button>
            </div>
          </form>
          <p>Don't have an account? 
            <Link to='/signup'>
              <span className='cursor-pointer text-blue-400 hover:underline'>Signup</span>
            </Link>
          </p>
        </div>
      </LoginWrapper>
    </LoginContainer>
  )
}

