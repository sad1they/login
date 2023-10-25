import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        query: '',
        data: []
    },
    reducers: {
        setSearch: (state, action) => {
            state.query = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
    }
});

export const { setSearch, setData } = dataSlice.actions;

export default dataSlice.reducer;