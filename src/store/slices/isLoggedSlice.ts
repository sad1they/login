import { createSlice } from '@reduxjs/toolkit';

export const isLoggedSlice = createSlice({
    name: 'isLogged',
    initialState: {
      isLogged: false
    },
    reducers: {
        setLogin: (state) => {
            state.isLogged = !state.isLogged;
        }
    }
});

export const { setLogin } = isLoggedSlice.actions;

export default isLoggedSlice.reducer;