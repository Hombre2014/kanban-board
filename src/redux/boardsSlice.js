import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data.json';

const boardSlice = createSlice({
  name: 'boards',
  initialState: data.boards,
  reducers: {
    // Add reducers
  }
})

export default boardSlice;
