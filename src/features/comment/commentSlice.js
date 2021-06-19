import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
  name: 'comment',
  initialState: { data: [] },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    storeComments: (state, action) => {
      state.data = action.payload;
    },
    deleteComment: (state, action) => {
      state.data = state.filter(n => action.payload !== n.id);
    },
  },
});

export const { storeComments, deleteComment } = commentSlice.actions;
export const storeAllComments = data => dispatch => {
  dispatch(storeComments(data));
};

// export const deleteNovelties = (id) => async dispatch => {
//   await apiDeleteService('news', id)
//   dispatch(deleteNovelty(id))
// }

export const commentSelector = state => state.comment.data;

export default commentSlice.reducer;
