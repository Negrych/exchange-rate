import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IData } from "../interfaces/dataInterface";
import { dataService } from "../services/dataService";

interface IDataState {
  data: IData[];
}

const initialState: IDataState = {
  data: [],
};

export const getAllData = createAsyncThunk(
  "dataSlice/getAllData",
  async (_, { dispatch }) => {
    const { data } = await dataService.getAll();
    dispatch(setData({ data: data }));
  }
);

const userSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<{ data: IData[] }>) => {
      state.data = action.payload.data;
    },
  },
});
const dataReducer = userSlice.reducer;
export default dataReducer;
export const { setData } = userSlice.actions;
