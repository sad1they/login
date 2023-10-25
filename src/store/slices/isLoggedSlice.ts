import { createSlice } from '@reduxjs/toolkit';
import { TStateLogin } from '../../types/types';

const initialState: TStateLogin = {
    isLogged: false
}

export const isLoggedSlice = createSlice({
    name: 'isLogged',
    initialState,
    reducers: {
        setLogin: (state) => {
            state.isLogged = !state.isLogged;
        }
    }
});

export const { setLogin } = isLoggedSlice.actions;

export default isLoggedSlice.reducer;