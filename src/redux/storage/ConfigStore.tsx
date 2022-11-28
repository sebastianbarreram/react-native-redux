import { configureStore } from '@reduxjs/toolkit';
import MessageReducer from '../slices/MessageSlice';
import usersReducer from '../slices/UserSlice';

export const ConfigStorage = configureStore({
  reducer: {
    mensaje: MessageReducer,
    users: usersReducer,
  },
});

export type AppDispatch = typeof ConfigStorage.dispatch;
