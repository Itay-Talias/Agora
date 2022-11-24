import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 3,
    agoraItems: [
        { id: 1, title: "watch", price: 200 },
        { id: 2, title: "table", price: 1000 },
    ],
};

export const inventoryReducer = createSlice({
    name: "agora",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.agoraItems = [
                ...state.agoraItems,
                { ...action.payload, id: state.id },
            ];
            state.id += 1;
        },
        removeItem: (state, action) => {
            state.agoraItems = state.agoraItems.filter(
                (i) => i.id !== action.payload
            );
        },
        changePrice: (state, action) => {
            state.agoraItems = state.agoraItems.map((i) => {
                if (i.id === action.payload.id) {
                    i.price = action.payload.price;
                }
                return i;
            });
        },
    },
});

export const selectAgoraItems = (state) => state.inventory.agoraItems;

export const selectItemsLength = (state) => state.inventory.agoraItems.length;

export const { addItem, removeItem, changePrice } = inventoryReducer.actions;

export default inventoryReducer.reducer;
