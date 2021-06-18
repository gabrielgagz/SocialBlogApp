import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    reducer1: (state) => {
      // action
      return;
    },
    reducer2: (state) => {
      // action
      return;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    reducer3: (state, action) => {
     // action
      return;
    },
  },
});

export const { reducer1, reducer2, reducer3 } = commentSlice.actions;


export default commentSlice.reducer;
