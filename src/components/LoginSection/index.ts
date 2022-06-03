import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #1B2520;
`
export const LoginWrapper = styled.div`
  color: #fff;
  width: 80em;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 100px;
  height: 100%;

  div:nth-child(1){
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    img {
      border-radius: 12px;
      height: 500px;
      width: 100%;
    }
  
  }

  div:nth-child(2){
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 200px;

    form {
      width: 100%;
      

      input {
        background-color: transparent;
        height: 40px;
        border-radius: 20px;
        padding-left: 10px;
        border: none;
        outline: none;
        border: 2px solid #53B2B7;
      }

      div {
        width: 100%;
        display: flex;
        justify-content: center;
        
        button {
          height: 50px;
          width: 150px;
          background: linear-gradient(90deg, rgba(48,221,161,1) 0%, rgba(90,184,159,1) 29%, rgba(82,177,186,1) 52%, rgba(209,218,94,1) 97%);
        }
      }
    }

    p {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }
`