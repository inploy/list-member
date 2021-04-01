import {createSlice} from '@reduxjs/toolkit';
import filter from 'lodash/filter';

export const memberSlice = createSlice({
  name: 'member',
  initialState: {
    members: [],
  },
  reducers: {
    setMembers: (state, action) => ({
      members: [...state.members, action.payload],
    }),
    editMembers: (state, action) => {
      state.members[action.payload.id] = action.payload.member;
    },
    removeMembers: (state, action) => {
      state.members = filter(state.members, (o, index) => {
        return index !== action.payload.index;
      });
    },
  },
});

export const {setMembers, editMembers, removeMembers} = memberSlice.actions;

export default memberSlice.reducer;
