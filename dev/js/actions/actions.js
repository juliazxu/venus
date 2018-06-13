import { REQUEST_ALL_PRODUCTS, RECEIVE_ALL_PRODUCTS, SWIPE_RIGHT, SWIPE_LEFT } from "../constants/action-types";
import { api } from './../../../api';

export function callAPI() {
  return function (dispatch){
    dispatch(requestAllProducts())
    return fetch(api)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveAllProducts(json))
      )
  }
};

export const requestAllProducts = () => {
  return {
    type: REQUEST_ALL_PRODUCTS,
  }
};

export const receiveAllProducts = (products) => {
  return {
    type: RECEIVE_ALL_PRODUCTS,
    payload: products,
  }
};

export const swipeRight = () => {
  return {
    type: SWIPE_RIGHT,
  }
};

export const swipeLeft = () => {
  return {
    type: SWIPE_LEFT,
  }
};