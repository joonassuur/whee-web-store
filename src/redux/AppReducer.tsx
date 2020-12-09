import { createSlice } from "@reduxjs/toolkit";
import {
  fetchStoreData,
  addToCart,
  removeFromCart,
  setCartQuantity
} from "../redux/AppActions";
import { Store } from "../types/Types";
import _ from "lodash";

const initialState: Store = {
  products: [],
  cart: [],
  cartQuantity: 0
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStoreData.fulfilled.toString()]: (state, { payload }) => {
      state.products = payload.products;
    },
    [fetchStoreData.rejected.toString()]: state => {
      return state;
    },
    [addToCart.toString()]: (state, { payload }) => {
      const clonedCart = _.cloneDeep(state.cart);
      clonedCart.filter(item =>
        item.id === payload.id ? (item.quantity = payload.quantity) : false
      );

      state = { ...state, cart: clonedCart };
      return state;
    },
    [removeFromCart.toString()]: (state, { payload }) => {
      const removeIndex = state.cart.map(item => item.id).indexOf(payload.id);
      state.cart.splice(removeIndex, 1);
    },
    [setCartQuantity.toString()]: (state, { payload }) => {
      state = { ...state, cartQuantity: payload };
      return state;
    }
  }
});

export default app;
