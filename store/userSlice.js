import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    clips: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addClip: (state, action) => {
        const newClip = action.payload;
        state.clips.push(newClip)
      },

    deleteClip:(state, action) => {
        const deleteClip = action.payload;
        const currentClips = state.clips;
        const filterClips = currentClips.filter((clip) => clip.url !== deleteClip.url);

        state.clips = filterClips;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addClip, deleteClip } = userSlice.actions

export default userSlice.reducer