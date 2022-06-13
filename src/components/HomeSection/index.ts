import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #EBF4FB;
  color: #fff;
  position: relative;

  .bg-home {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const HomeWrapper = styled.div`
  width: 40em;
  color: #2C4555;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 12px;

  @media (max-width: 480px){
    width: 20em;
    margin-left: 20px;
  }

  @media (max-width: 480px){
    h1 {
      font-size: 3em;
    }
  }
  


  


  div:nth-child(1){
    button {
      height: 50px;
      width: 150px;
      background-color: #F24444;
      color: #fff;
    }
  }

`