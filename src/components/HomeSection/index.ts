import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #1B2520;
  color: #fff;
`

export const HomeWrapper = styled.div`
  width: 80em;
  height: 100%;
  margin: 0 auto;
  background-color: #1B2520;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div:nth-child(1){
    button {
      height: 50px;
      width: 150px;
      background: linear-gradient(90deg, rgba(48,221,161,1) 0%, rgba(90,184,159,1) 29%, rgba(82,177,186,1) 52%, rgba(209,218,94,1) 97%);
    }
  }

  div:nth-child(2){
    img {
      border-radius: 20px;
    }
  }
`