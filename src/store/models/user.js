import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    citizenID: '',
    phone: '',
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setValues: (state, action) => {
      state.citizenID = action.payload.citizenID;
      state.phone = action.payload.phone;
    },
  },
});

export const {setIsAuth, setValues} = userSlice.actions;

export default userSlice.reducer;
