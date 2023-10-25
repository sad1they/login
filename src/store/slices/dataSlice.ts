import { createSlice } from '@reduxjs/toolkit';
import { TStateData } from '../../types/types';
import { sortName } from '../../helpers/sortName';

const initialState: TStateData = {
    query: '',
    data: [],
    childData: [],
    key: '_',
    sort: 'default',
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.query = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
        setChildData: (state, action) => {
            state.childData = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;

            action.payload === 'A_Z' ? 
                state.childData.sort((a, b) => sortName(a.name, b.name)) : 
                state.childData.sort((a, b) => sortName(a.key, b.key))
        },
        setKey: (state, action) => {
            state.key = action.payload;
            state.sort = 'default';
            state.query = '';
        },
    }
});

export const { setSearch, setData, setChildData, setSort, setKey } = dataSlice.actions;

export default dataSlice.reducer;