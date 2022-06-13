import styled from 'styled-components'

interface ChatProps  {
  open: string
  show?: string
}

export const ChatContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: transparent;
  color: #fff;
  display: flex;
  margin-left: 140px;

  @media (max-width: 480px){
    margin: 0px;
  }
  


  &::-webkit-scrollbar {
      width: 10px;
      border: 1px solid black;
  }

`

export const ChatWrapper = styled.div<ChatProps>`
  width: 100%;
  align-items: center;
  display: flex;
  position: relative;

  .side-content-wrapper {
    width: 20em;
    height: 100vh;
    overflow-x: hidden;

    .chat-back-arrow {
      position: absolute;
      top: 50%;
      right: 10px;
      cursor: pointer;
      transform: translateY(-50%);
      z-index: 1000;
      display: none;

      @media (max-width: 480px){
        display: block;
      }
    }

    @media (max-width: 480px){
      display: ${props => props.open};
      transform: ${props => props.show};
    }

    .people-group-chat {
      height: 90vh;
      width: 100%;
      background-color: #EBF4FB;
      color: #010B20;
      overflow: hidden;

      .room-notifications {
      height: 20px;
      width: 20px;
      display: flex;
      border-radius: 100%;
      background-color: red;
      justify-content: center;
      align-items: center;
      font-size: 0.8em;
      position: absolute;
      right: 20px;
    }


    
      .members-rooms {
        cursor: pointer;
        display: flex;
        gap: 10px;
        align-items: center;
        position: relative;
        
        /* border-bottom: 1px solid #D7E3ED; */

        &::after {
          content: "";
          background: #D7E3ED;
          position: absolute;
          bottom: 0;
          left: 50%;
          height: 1px;
          width: 85%;
          transform: translateX(-50%)
        }
        
      
        img {
          height: 40px;
          width: 40px;
          object-fit: cover;
          border-radius: 100%;
        }

        .border-left-active {
          position: absolute;
          top:0;
          left: 0;
          height: 100%;
          width: 5px;
          background-color: #ff4d4c;
          border-radius: 12px;
        }

        .triangle {
          position: absolute;
          top: 60%;
          right: 0px;
          transform: translateY(-50%)
        }
        .triangle:before,
        .triangle:after {
          width:  4em;
          height: 3em;
          position: relative;
          background: #fff;
          border-top-right-radius: 30%;
          margin: 30% auto 0;
        }
        .triangle:before,
        .triangle:after {
          content: '';
          position: absolute;
          margin: 0;
        }

        .triangle {
          transform: rotate(-60deg) skewX(-30deg) scale(1,.866);
        }
        .triangle:before {
          transform: rotate(-113deg) skewX(-48deg) scale(1.414,.707) translate(0,-50%);
        }
        .triangle:after {
          transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
        }
      }
      .members-rooms.active {
        background: rgb(252,249,249);
        background: linear-gradient(90deg, rgba(252,249,249,1) 0%, rgba(235,244,251,1) 100%);
      }
    }
  }

  .search-section {
    background-color: #E2EEF7;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .search-wrapper {
      display: flex;
      color: #010B20;
      background-color: #fff;
      border-radius: 20px;
      div:nth-child(1){
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
      }
      input {
        border: none;
        outline: none;
        border-radius: 20px;
        padding-left: 5px;
       
      }
    }
  }

  .members-section {
    display: flex;
    flex-direction: column;
    max-height: 57vh;
    overflow-y: auto;
    overflow-x: hidden;

        /* width */
    &::-webkit-scrollbar {
      width: 0px;
      height: 5px;
    
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 12px;
    
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #E2EEF7;
      border-radius: 12px;
      
    }
  }
  

  `

 
  export const ChatBoxContainer = styled.div<ChatProps>`
    height: 100vh;
    width: 60%;
    background-color: #fff;
    position: relative;
    padding: 30px;
    color: #2C4555;
    flex-direction: column;
    display: flex;
    

    @media (max-width: 480px){
      width: 100%;
      padding: 10px;
      display: ${props => props.open};
    }
    

    .all-chat-wrapper {
      flex-grow: 1;
      overflow-y:auto;
    }

    .chat-hover-wrapper {
      align-items: center;
      justify-content:center;
      gap: 10px;
      position: relative;

      &:hover {
        .chat-date {
          display: block;
        }
        .chat-date-user {
          display: block;
        }
      }
      .chat-date {
        font-size: 12px;
        display: none;
        position: absolute;
        left: -80px;
        z-index: 1000;
        padding: 8px;
        background-color: #EBF4FB;
        width: 75px;
        opacity: 0.55;
        border-radius: 20px;
        top: 50%;
        transform: translateY(-50%)
      }
      .chat-date-user {
        font-size: 12px;
        display: none;
        position: absolute;
        right: -80px !important;
        z-index: 1000;
        padding: 8px;
        background-color: #EBF4FB;
        width: 75px;
        opacity: 0.55;
        border-radius: 20px;
        top: 50%;
        transform: translateY(-50%)
      }
    }


    .chat-header-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      .video-icon {
        height: 32px;
        width: 32px;
        background-color: #F0F4F8;
        border-radius: 50%;
        padding: 2px solid red;;
        text-align: center;
        color: #758A99;
        cursor: pointer;
      }
      .phone-icon {
        height: 32px;
        width: 32px;
        background-color: #F0F4F8;
        border-radius: 50%;
        padding: 5px;
        text-align: center;
        color: #758A99;
        cursor: pointer;
      }
    }

   .chatbox-header{
     display: flex;
     justify-content: space-between;
     border-bottom: 1px solid #D1DDE6;
     position: relative;


     @media (max-width: 480px) {
      .chat-title {
        transform: translateX(50px);

        h1 {
          white-space: nowrap; 
          width: 200px; 
          overflow: hidden;
          text-overflow: ellipsis; 
        }
      }
      
     }

     @media (max-width: 480px){
      height: 10vh;
     }
    
      h1 {
        padding: 10px 0 25px 0;
        
      }

      .chat-status {
        color: #A0B6C5;
        font-size: 13px;
      }
    }

    
    .show-sidebar-arrow  {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      display: none;

      @media (max-width: 480px){
        display: block;
      }
    }

    .user-avatar {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }

    .chat-text-content.user {
      display: flex;
      justify-content: flex-end;
      margin-right: 10px;


      .chat-content-wrapper.user {
        background-color: #F04242;
        color: #fff;
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 400px;

        @media (max-width: 480px){
          max-width: 230px;
        }
      }
    }

    .chat-text-content{
      color: #758A99;
      .chat-box-color{
        display: flex;
        gap: 15px;
        margin: 10px 0px;
        .chat-content-wrapper {
          background-color: #EBF4FB;
          padding: 10px 20px;
          justify-content: center;
          display: flex;
          align-items: center;
          border-radius: 20px;
          max-width: 400px;

          @media (max-width: 480px){
          max-width: 230px;
          }
        }
      }

      .chat-text-inner {
        img {

        }
      }
    }

  `

  export const ChatInput = styled.div`
    width: 100%;
    /* position: absolute;
    bottom: 20px;
    left: 0px; */
    padding: 20px 30px;
    /* border-top: 1px solid #D1DDE6; */


    @media (max-width: 480px){
      bottom: 0;
    }

    &::after {
    content: "";
    background: #D7E3ED;
    position: absolute;
    top: 0;
    left: 50%;
    height: 1px;
    width: 95%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    }
    
    
    form {
      width: 100%;
      display: flex;
      justify-content: space-between;

      input {
        width: 100%;
        margin: 10px 20px 0 0;
        background-color: transparent;
        height: 40px;
        border: none;
        outline: none;
      }
      .chat-emoji {
        height: 40px;
        width: 50px;
        background-color: #F0F4F8;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-top: 10px;
      }
      .chat-files {
        height: 40px;
        width: 50px;
        background-color: #F0F4F8;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;;
        margin-top: 10px;
      }
      .chat-send {
        height: 40px;
        width: 50px;
        background-color: #F94C4C;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;;
        margin-top: 10px;
        padding: 2px solid red;;
        color: #fff;
      }


    }
  `