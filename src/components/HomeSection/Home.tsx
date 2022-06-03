import React from 'react'
import { HomeContainer, HomeWrapper } from './index'
import friendsImage from './images/friends.webp'


export const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <div className='flex flex-col justify-center items-start pl-10 gap-2'>
          <h1 className='text-8xl'>Share the world with friends</h1>
          <p className='text-lg'>ChatApp lets you connect with the world, no matter your location</p>
          <button className='mt-10 rounded-full'>Get Started</button>
        </div>
        <div className='flex flex-column justify-center items-center'>
          <img src={friendsImage} alt="friends" />
        </div>
      </HomeWrapper>
    </HomeContainer>
  )
}
