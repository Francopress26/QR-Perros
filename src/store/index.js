import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import { useDispatch,useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {authReducer},
})




