import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/rootStore";

export interface Card {
  id: number;
  name: string;
  photo: string;
}

const initialState: Card[] = [];

const RecomListWidgetSlice = createSlice({
  name: "recCards",
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<Card>) {
      state.push(action.payload);
    },

    removeCard(state, action: PayloadAction<number>) {
      return state.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, removeCard } = RecomListWidgetSlice.actions;

export const selectCards = (state: RootState) => state.recCards;

export default RecomListWidgetSlice.reducer;
