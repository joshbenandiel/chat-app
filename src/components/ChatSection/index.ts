import styled from 'styled-components'

export const ChatContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #1B2520;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChatWrapper = styled.div`
  width: 70em;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  
  .side-content-chat {
    display: flex;
    flex-direction: column;
    padding-right: 100px;
    gap: 10px;
    
    .members-rooms {
      cursor: pointer;
      border: 1px solid #1C593E;
      padding: 10px;
      border-radius: 12px;
      display: flex;
      gap: 10px;
      align-items: center;
      img {
        height: 40px;
        border-radius: 100%;
        border: 2px solid #53B2B7;
      }
    }
    .members-rooms.active {
      background-color: #73F7C1;
      color: black;
    }
  }

  `
  export const ChatBoxContainer = styled.div`
    height: 600px;
    width: 600px;
    background-color: #1B392C;
    border-radius: 10px;
  `

  export const ChatInput = styled.div`
    width: 100%;
    
    form {
      width: 100%;
      display: flex;
      justify-content: space-between;

      input {
        width: 100%;
        margin: 10px 20px 0 0;
        background-color: transparent;
        height: 40px;
        border-radius: 10px;
        padding-left: 20px;
        border: none;
        outline: none;
        border: 2px solid #53B2B7;
      }

      button {
        height: 40px;
        width: 50px;
        background-color: #53B2B7;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        margin-top: 10px;
      }


    }
  `