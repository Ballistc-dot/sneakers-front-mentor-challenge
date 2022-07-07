import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

export interface CartProduct {
  quantity: number;
  product: string;
  price: number;
  total_price: number;
}

interface CartState {
  cart: CartProduct[];
}

const initialState: CartState[] = [];

interface CartInput {
  quantity: number;
  product: string;
  price: number;
  total_price?: number;
}

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    cart: initialState,
  },
  reducers: {
    addProduct: (state: any, action: PayloadAction<CartInput>) => {
      console.log(state.cart);
      const storageProductWithoutAlteredOne = current(state).cart.filter(
        (CartProduct: CartProduct) =>
          CartProduct.product !== action.payload.product
      );
      const hasAddedProduct: CartProduct[] = current(state).cart.filter(
        (CartProduct: CartProduct) => {
          if (CartProduct.product === action.payload.product)
            return CartProduct;
        }
      );

      if (hasAddedProduct[0]) {
        const updateProduct = {
          product: hasAddedProduct[0].product,
          price: hasAddedProduct[0].price,
          quantity: hasAddedProduct[0].quantity + action.payload.quantity,
          total_price:
            hasAddedProduct[0].total_price +
            hasAddedProduct[0].price * action.payload.quantity,
        };

        state.cart = [updateProduct, storageProductWithoutAlteredOne];
      } else {
        action.payload.total_price =
          action.payload.price * action.payload.quantity;
        state.cart = [action.payload, ...state.cart];
      }
    },
    increment: (state: any, action: PayloadAction<CartProduct>) => {
      const storageProductWithoutAlteredOne = state.cart.filter(
        (CartProduct: CartProduct) =>
          CartProduct.product !== action.payload.product
      );
      const storageProduct = state.cart.filter(
        (CartProduct: CartProduct) =>
          CartProduct.product == action.payload.product
      );
      const newProductState = {
        product: action.payload.product,
        quantity: storageProduct.quantity + 1,
        price: storageProduct.price,
      };
      state.cart = [storageProductWithoutAlteredOne, newProductState];
    },
    decrement: (state: any, payload: PayloadAction) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state: any, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, addProduct } = cartSlice.actions;

export default cartSlice.reducer;
