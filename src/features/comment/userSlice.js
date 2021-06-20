import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { data: { email: 'email@email.com'} },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    storeUser: (state, action) => {
      state.data = action.payload;
    }
  },
});

export const { storeUser } = userSlice.actions;

// Store all comments from endpoint
export const storeNewUser = data => dispatch => {
  dispatch(storeUser(data));
};

export const userSelector = state => state.user.data; // Not used

export default userSlice.reducer;
