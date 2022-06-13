import styled from 'styled-components'

export const NavContainer = styled.div`
  width: 70px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #181F2E;
  z-index: 1000;


  @media (max-width: 375px){
    display: none;
    transform: translateX(-100px)
  }
  
`

export const NavWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: transparent;
  

  .nav-user {
    background-color: #141A26;
    height: 80px;
  }

  .nav-body {

    .active {
      color: #F34848;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      margin-top: 50px;

      
      li:hover {
        cursor: pointer;
        color: #F34848;
      }
    }
  }

  .nav-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 0px;
    gap: 20px;
    height: auto;
    background-color: #202A3F;
    position: absolute; 
    bottom: 0;
    width: 100%;

    .settings-button {
      cursor: pointer;

      &:hover {
        color: #F34848;
      }
    }

    .logout-button {
      cursor: pointer;

      &:hover {
        color: #F34848;
      }
    }

    .login-button {
      transform: translateX(-6px);
      cursor: pointer;

      &:hover {
        color: #F34848;
      }
    }
  }

  .logout-section {
    background-color: #1B392C;
    width: 80%;
    border-radius: 12px;
    &:hover {
      background-color: #73F7C1;
      color: black;
    }
  }  
  .user-profile {
    height: 40px;
    width: 40px;
    border: 2px solid #F34848;
   
  }

  .web-logo {
    height: 40px;
    width: 40px;
  }

 

`