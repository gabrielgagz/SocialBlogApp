import { configureStore } from '@reduxjs/toolkit';
import commentReducer from '../features/comment/commentSlice';
import userReducer from '../features/comment/userSlice';

export const store = configureStore({
  reducer: {
    comment: commentReducer,
    user: userReducer
  },
});
