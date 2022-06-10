
import { HomeContainer, HomeWrapper } from './index'
import { Link } from 'react-router-dom'
import bg from './images/image_processing20210528-29044-wrqyaj.gif'


export const Home = () => {
  return (
    <HomeContainer>
      <img className='bg-home' src={bg} alt="background" />
      <HomeWrapper>
        <div className='flex flex-col justify-center items-start pl-10 gap-2'>
          <h1 className='text-8xl font-bold'>Share the world with friends</h1>
          <p className='text-lg font-bold'>ChatApp lets you connect with the world, no matter your location</p>
          <Link to='/login'>
            <button className='mt-10 rounded-full'>Get Started</button>
          </Link>
        </div>
      </HomeWrapper>
    </HomeContainer>
  )
}
