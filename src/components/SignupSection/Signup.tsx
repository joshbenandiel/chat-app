import React, { useRef } from 'react'
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SignUpContainer, SignUpWrapper } from '.';
import { useSignUpUserMutation } from "../../services/appApi";
import defaultImage from './images/defaultImage.png'
import { IoMdAddCircle } from 'react-icons/io'
import bg from '../HomeSection/images/image_processing20210528-29044-wrqyaj.gif'



const { default: axios } = require('axios');
interface Type  {
  name: string
  email: string
  password: string
  picture?: string
}

export const Signup = () => {

  const [selectedFile ,setSelectedFile] = useState<any>()
  const [preview, setPreview] = useState<any>()
  const [uploadingImg, setUploadingImage] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string>('')
  const [signUpUser, {isLoading, error}] = useSignUpUserMutation<any>();
  const [imageError, setImageError] = useState<string>('')
  const [submit, setSubmit] = useState<boolean>(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState<Type>({
    name: '',
    email: '',
    password: '',
  })

 
  console.log({err: error, load: isLoading})
  const onSelectFile = (e: any) => {
    setSelectedFile(e.target.files[0])
  }
  useEffect(() => {
    if(selectedFile){
      setPreview(URL.createObjectURL(selectedFile))
      uploadImage()
   
    }
  },[selectedFile])

  useEffect(() => {
    setFormData({
      ...formData,
      picture: imageUrl
    })
  },[imageUrl])

  const handleSubmit = (e:any) => {
    e.preventDefault()
    if(imageUrl) {
      signUpUser({name: formData.name, email: formData.email, password: formData.password, picture: formData.picture}).then(({data}: any) => {
        if(data){
          navigate('/chat')
        }
      })
      setImageError('')
    } else {
      setImageError('Please upload an image')
    }

  }

  const handleChange = (e: any) => {
    const {value, name} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const uploadImage = async() => {
    const data = new FormData()
    data.append('file', selectedFile)
    data.append('upload_preset', 'lk4m0azm')
    setUploadingImage(true)
    try {
      await axios.post('https://api.cloudinary.com/v1_1/daqygbirz/image/upload', data)
      .then((res: any) => {
        setImageUrl(res.data.url)
      })
      setUploadingImage(false)
    }
    catch(err){
      setUploadingImage(false)
      console.log(err)
    }
  }
  const imageRef = useRef<any>()
  const handleImage= () => {
    imageRef.current.click()
  }

  return (
    <SignUpContainer>
      <img className='bg-signup' src={bg} alt="background" />
      <SignUpWrapper>
        <div className='form-wrapper'>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='font-bold text-4xl'>Create Account</h1>
              <div className='relative hover:brightness-110'>
                <img onClick={handleImage} className='signup-image object-cover rounded-full h-24 w-24 mt-2 mb-2 border-2 cursor-pointer'src={preview ? preview : defaultImage} alt="avatar" />
                <IoMdAddCircle className='absolute bottom-1 right-2' color='orange' size={20}/>
              </div>
              <input ref={imageRef} className='hidden'type="file" onChange={onSelectFile}/>
              <span>{imageError}</span>
              {error &&<span className='text-error-signup'>{error?.data}</span>}
            </div>
            <div className='sign-up-form'>
              <label htmlFor="name">Name</label>
              <input placeholder='Enter Name' name='name' id='name' type="text" onChange={handleChange}/>
              <label htmlFor="email">Email Address</label> 
              <input placeholder='Enter Email Address'name='email' id='email' type="text" onChange={handleChange}/>
              <label htmlFor="pass">Password</label>
              <input placeholder='Enter Password' name='password' id='pass' type="password" onChange={handleChange}/>
              <div>
                <button className='rounded-full mt-3' type='submit'>{isLoading ? 'Signup you up..' : 'Signup'}</button>
              </div>
            </div>
          </form>
          <p>Don't have an account? 
            <Link to='/login'>
              <span className='cursor-pointer text-blue-400 hover:underline'>Login</span>
            </Link>
          </p>
        </div>
      </SignUpWrapper>
  </SignUpContainer>
  )
}
