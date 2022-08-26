import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardSlice/cardsSlice";
export const store = configureStore({
  reducer: {
    cards: cardsSlice,
  },
});
