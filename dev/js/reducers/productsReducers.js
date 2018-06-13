import { REQUEST_ALL_PRODUCTS, RECEIVE_ALL_PRODUCTS, SWIPE_RIGHT, SWIPE_LEFT } from "../constants/action-types";

export const initialState = {
  allProducts: [],
  likedProducts: [],
  counter: 0,
}

export function products (state = initialState, action) {
  switch (action.type) {
    case REQUEST_ALL_PRODUCTS:
      return { 
        ...state,
      };
    case RECEIVE_ALL_PRODUCTS:
      return { 
        ...state,
        allProducts: action.payload.hits,
      };
    case SWIPE_RIGHT:
      return { 
        ...state,
        likedProducts: state.likedProducts.concat(state.allProducts[state.counter]), 
        counter: state.counter + 1 
      };
    case SWIPE_LEFT:
      return { 
        ...state,
        counter: state.counter + 1 
      };
    default:
      return state;
  }
}