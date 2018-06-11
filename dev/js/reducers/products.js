import { REQUEST_ALL_PRODUCTS, RECEIVE_ALL_PRODUCTS, SWIPE_RIGHT, SWIPE_LEFT } from "../constants/action-types";

export const initialState = {
  allProducts: null,
  likedProducts: {},
  counter: 0,
  loading: true,
}

export function products (state = initialState, action) {
  switch (action.type) {
    case REQUEST_ALL_PRODUCTS:
      return { 
        ...state,
        loading: true,
      };
    case RECEIVE_ALL_PRODUCTS:
      return { 
        ...state,
        allProducts: action.payload.hits,
        loading: false
      };
    case SWIPE_RIGHT:
      return { 
        ...state, 
        likedProducts: Object.assign(state.allProducts[state.counter], state.likedProducts), 
        counter: state.counter + 1 
      };
    case SWIPE_LEFT:
      return { 
        ...state,
        likedProducts: Object.assign(state.allProducts[state.counter], state.likedProducts),
        counter: state.counter + 1 
      };      
    default:
      return state;
  }
}