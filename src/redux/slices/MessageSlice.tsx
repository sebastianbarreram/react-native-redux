import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const MessageSlice = createSlice({
  name: 'mensaje',
  initialState: {
    mensaje: 'Initial message',
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.mensaje = action.payload;
    },
  },
});

export default MessageSlice.reducer;
export const { setMessage } = MessageSlice.actions;
