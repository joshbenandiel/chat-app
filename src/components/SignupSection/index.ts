import styled from "styled-components";

export const SignUpContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #EBF4FB;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #536774;
  position: relative;

  .bg-signup {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
`

export const SignUpWrapper = styled.div`
 

  .form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30em;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .signup-image {
      border: 2px solid #F24444;
    }

    .text-error-signup {
      width: 100%;
      background-color: #ed4337;
      padding: 10px;
      border-radius: 5px;
    }
    form {
      width: 100%;
  
  
      .sign-up-form {
        display: flex;
        flex-direction: column;
        gap: 10px;

        label {
          font-size: 1rem;
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
    }
    p {
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 10px;
      margin-top: 10px;
    }
  }

`