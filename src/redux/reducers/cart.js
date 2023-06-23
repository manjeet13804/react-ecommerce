import { createSlice } from "@reduxjs/toolkit";
const cart = createSlice({
   name: "cart",
   initialState: { items: [], totalItem: 0, subtotal: 0 },
   reducers: {
      handleAddToCart: (state, action) => {
         return state = { ...state, items: [...state.items, action.payload] }
      },
      handleTotalItem: (state, action) => {
         return state = { ...state, totalItem: action.payload }
      },
      handleSubtotal: (state, action) => {
         return state = { ...state, subtotal: action.payload }
      },
      onAddCartQty: (state, action) => {
         const index = state.items.findIndex((item) => item[0].id === action.payload[0])
         state.items[index][0].quantity += 1
         state.items[index][0].totalPrice = state.items[index][0].quantity * state.items[index][0].price
      },
      onRemoveCartQty: (state, action) => {
         const index = state.items.findIndex((item) => item[0].id === action.payload[0])
         if (state.items[index][0].quantity) {
            state.items[index][0].quantity -= 1
            state.items[index][0].totalPrice = state.items[index][0].quantity * state.items[index][0].price
         }
      },
      onRemoveFromCart: (state, action) => {
         return state = { ...state, items: action.payload }
      },
      onEmptyCart: (state, action) => {
         return state = { items: [], totalItem: 0, subtotal: 0 }
      }
   }
})
export const { handleAddToCart, handleSubtotal, handleTotalItem, onAddCartQty, onRemoveCartQty, onRemoveFromCart, onEmptyCart } = cart.actions;
export default cart.reducer;