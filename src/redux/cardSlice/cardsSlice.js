import { createSlice, current } from "@reduxjs/toolkit";
import data from "../../data";
export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    point: 0,
    item: data.sort(() => Math.random() - 0.5),
    opened: false,
    id: "",
    selectId: [],
  },
  reducers: {
    getData: (state) => {
      state.item = data;
    },

    selectCard: (state, action) => {
      const id = action.payload;
      const item = state.item.find((item) => item.id === id);
      item.status = !item.status;
    },
  },
});
export const { getData, selectCard } = cardsSlice.actions;
export default cardsSlice.reducer;
