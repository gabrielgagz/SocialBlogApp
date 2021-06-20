import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
  name: 'comment',
  initialState: { data: [] },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    storeComments: (state, action) => {
      state.data = action.payload;
    },
    storeComment: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { storeComments, storeComment } = commentSlice.actions;

// Store all comments from endpoint
export const storeAllComments = data => dispatch => {
  dispatch(storeComments(data));
};

// Store a single comment in state
export const storeNewComment = data => dispatch => {
  dispatch(storeComment(data));
};
export const commentSelector = state => state.comment.data; // Not used

export default commentSlice.reducer;
