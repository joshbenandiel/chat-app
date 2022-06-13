import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #EBF4FB;
  position: relative;

  .bg-login {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
export const LoginWrapper = styled.div`
  color: #536774;
  width: 30em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  @media (max-width: 375px){
    width: 17em;
    left: 60%;
  }
  


  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    
    .button-wrapper-login {
      width: 100%;
      text-align: center;
    }
    
    .text-error-login {
      width: 100%;
      background-color: #ed4337;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    form {
      width: 100%;
      
      label {
        font-weight: bold;
      }

      input {
        background-color: #fff;
        height: 40px;
        border-radius: 20px;
        padding-left: 20px;
        border: none;
        outline: none;
        border: 2px solid #F24444;
      }

      div {
        width: 100%;
        display: flex;
        justify-content: center;
        
        button {
          height: 50px;
          width: 150px;
          background-color: #F24444;
          color: #fff;
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