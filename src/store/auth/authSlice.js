import { createSlice } from '@reduxjs/toolkit'

const initialState = {
isLogged: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    Login(state){
        state.isLogged = true
    }
  }
});

export const {Login} = authSlice.actions

export default authSlice.reducer