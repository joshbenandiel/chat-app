import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

export const showSideBar = createSlice({
  name: 'show',
  initialState,
  reducers: {
    toggleShow: (state, action) => {
      state.isOpen = action.payload
    }
  }
})

export const { toggleShow } = showSideBar.actions

export default showSideBar.reducer