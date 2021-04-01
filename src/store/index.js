import {configureStore} from '@reduxjs/toolkit';
import memberReducer from './models/member';

export default configureStore({
  reducer: {
    member: memberReducer,
  },
});
