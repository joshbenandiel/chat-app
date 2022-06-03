import styled from "styled-components";

export const SignUpContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #1B2520;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`

export const SignUpWrapper = styled.div`
  width: 70em;
  display: grid;
  grid-template-columns: 1fr 1fr;


  .form-wrapper {
    padding-right: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    form {
      width: 100%;
  
  
      .sign-up-form {
        display: flex;
        flex-direction: column;
        gap: 10px;
  
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
    }
    p {
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 10px;
      margin-top: 10px;
    }
  }


  .images-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 400px;
      width: 100%;
      border-radius: 12px;
    }
  }
`